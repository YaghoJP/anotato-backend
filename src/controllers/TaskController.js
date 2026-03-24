import Controller from "./Controller.js";
import taskService from "../services/TaskService.js";

class TaskController extends Controller{
    constructor(){
        super(taskService);
    }

    async finishTask(req, res){
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
}

export default new TaskController();