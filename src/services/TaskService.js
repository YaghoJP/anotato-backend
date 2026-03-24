import BaseService from "./Service.js";
import prismaClient from "../prisma/index.js";

class TaskService extends BaseService{
    constructor(){
        super(prismaClient.task)
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

    async finishTask(id){
        const task = this.getTaskById(id);

        const updated = await this.model.update({
            where: { id: Number(id) },
            data: {
                completed: true
            }
        });

        return updated;
    }
}

export default new TaskService();