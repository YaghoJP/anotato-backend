import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import { AuthUserDTO } from "../../dtos/user/AuthUserDTO";
import prismaClient from "../../prisma";
import { AppError } from "../../shared/errors/AppError";


class AuthUserService{
    async execute({email, senha}:AuthUserDTO){

        const userExist = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        });
        
        if(!userExist){
            throw new AppError("User/Password incorret", 400);
        }
        
        const passwordHashCompare = compare(senha, userExist.password!);

        if(!passwordHashCompare){
            throw new AppError("User/Password incorret", 400);
        }

        const token = sign(
            {
                name: userExist.name,
                email: userExist.email
            },
            process.env.JWT_SECRET as string,
            {
                subject: userExist.id,
                expiresIn: "30d"
            }
        );

        return{
            id:userExist.id,
            name:userExist.name,
            email:userExist.email,
            token:token
        };

    }
}

export { AuthUserService };