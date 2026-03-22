import BaseService from "./Service.js";
import prismaClient from "../prisma/index.js";
import { hash } from "bcrypt";

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
}

export default new UserService();