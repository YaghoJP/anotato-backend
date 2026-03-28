import Controller from "./Controller.js";
import taskService from "../services/TaskService.js";

class TaskController extends Controller{
    constructor(){
        super(taskService);
    }

    async completeTask(req, res){
        try{
           const {id} = req.params;
           const updateRegister = await this.entidadeService.completeTask(id)
           return res.status(200).json(updateRegister)
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    async create(req, res){
        try{
            const userId = req.user.id
            const data = req.body;
            const createRegister = await this.entidadeService.create(userId, data);
            return res.status(200).json(createRegister);
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    async getTaskByUser(req, res){
        try{
            const userId = req.user.id
            const userTasks = await this.entidadeService.getTaskByUserId(userId);
            return res.status(200).json(userTasks);
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }
}

export default new TaskController();