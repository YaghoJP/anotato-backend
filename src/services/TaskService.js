import BaseService from "./Service.js";
import prismaClient from "../prisma/index.js";

class TaskService extends BaseService{
    constructor(){
        super(prismaClient.task)
    }

    async getTaskByUserId(userId){
        if(!userId){
            throw new Error("O ID é obrigatório para essa operação.");
        }

        const user = await prismaClient.user.findFirst({
            where:{
                id:userId
            }
        });

        if(!user){
            throw new Error("Usuário não encontrado.");
        }

        const tasks = await prismaClient.task.findMany({
            where:{
                userId:userId
            }
        });

        return tasks;
    }

    async getUserById(userId){
        if(!userId){
            throw new Error("O ID é obrigatório para essa operação.");
        }

        const user = await prismaClient.user.findFirst({
            where:{
                id:userId
            }
        });

        if(!user){
            throw new Error("Usuário não encontrado.");
        }

        return user;
    }

    async getTaskById(id){
        if(!id){
            throw new Error("O ID é obrigatório para essa operação.");
        }

        const task = await this.model.findUnique({
            where: { id: Number(id) }
        });

        if(!task){
            throw new Error("Task não encontrada.");
        }
        
        return task;
    }

    async completeTask(id){

        await this.getTaskById(id);

        const updated = await this.model.update({
            where: { id: Number(id) },
            data: {
                completed: true
            }
        });

        return updated;
    }

    async create(userId, data){
        console.log(userId, data)
        await this.getUserById(userId);

        const create = await this.model.create({
            data:{
                title:data.title,
                userId:userId
            }
        });

        return create;
    }
}

export default new TaskService();