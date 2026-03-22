import BaseService from "./Service.js";
import prismaClient from "../prisma/index.js";

class TaskService extends BaseService{
    constructor(){
        super(prismaClient.task)
    }
}

export default new TaskService();