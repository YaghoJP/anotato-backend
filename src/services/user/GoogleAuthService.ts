import axios from 'axios';
import jwt from 'jsonwebtoken';
import prismaClient from "../../prisma";
import { GoogleUserInfoDTO } from '../../dtos/user/GoogleUserInfoDTO';

class GoogleAuthService{
    async execute(code: string){
        const tokenResponse = await axios.post(
            "https://oauth2.googleapis.com/token",
            {
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                code,
                grant_type: "authorization_code",
                redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            }
        );

        const { access_token } = tokenResponse.data;

        const userResponse = await axios.get<GoogleUserInfoDTO>(
            "https://www.googleapis.com/oauth2/v2/userinfo",
            {
                headers: {
                Authorization: `Bearer ${access_token}`,
                },
            }
        );

        let user = await prismaClient.user.findFirst({
            where:{
                email:userResponse.data.email
            }
        });

        if(!user){
            user = await prismaClient.user.create({
                data:{
                    email:userResponse.data.email,
                    name:userResponse.data.name,
                    google_id:userResponse.data.id,
                    avatar_url:userResponse.data.picture
                }
            });
        }

        const token = jwt.sign(
            {
                sub: user.id
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d"
            }
        );

        return {
            token,
            user:{
                id:user.id,
                name:user.name,
                email:user.email,
                avatar_url: user.avatar_url
            }
        }
    }
}

export { GoogleAuthService };