import BaseService from "./Service.js";
import prisma from "../prisma/prisma.js";

class UserService extends BaseService{
    constructor(){
        super(prisma.users)
    }
}

export default new UserService();