import BaseService from "./Service.js";
import prismaClient from "../prisma/index.js";

class UserService extends BaseService{
    constructor(){
        super(prismaClient.user)
    }
}

export default new UserService();