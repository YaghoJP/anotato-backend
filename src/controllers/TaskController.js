import Controller from "./Controller.js";
import taskService from "../services/TaskService.js";

class TaskController extends Controller{
    constructor(){
        super(taskService);
    }
}

export default new TaskController();