import BaseService from "./Service.js";
import prismaClient from "../prisma/index.js";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

class UserService extends BaseService{
    constructor(){
        super(prismaClient.user)
    }

    async getByEmail(email){
        return await this.model.findUnique({
            where:{email}
        });
    }

    async create(data){
        if(!data.email || !data.password){
            throw new Error("Email e senha são obrigatórios");
        }

        const emailExists = await this.getByEmail(data.email);

        if(emailExists){
            throw new Error("Email já esta cadastrado.");
        }

        const passwordHash = await hash(data.password, 8);

        data.password = passwordHash;

        return await super.create(data);
    }

    async login(email, password){
        const user = await this.getByEmail(email);

        if(!user){
            throw new Error("Usuário não encontrado.");
        }

        console.log(user.id);
        const isValid = await compare(password, user.password);

        if(!isValid){
            throw new Error("Senha inválida");
        }

        const token = jwt.sign(
            {id: user.id, email: user.email},
            process.env.JWT_SECRET,
            {
                subject: String(user.id),
                expiresIn: "30d"
            }
        );

        return{
            user:{
                id: user.id,
                email: user.email
            },
            token
        };
    }
}

export default new UserService();