import Controller from "./Controller.js";
import userService from "../services/UserService.js";

class UserController extends Controller{
    constructor(){
        super(userService);
    }
}

export default new UserController();