import Controller from "./Controller.js";
import userService from "../services/UserService.js";

class UserController extends Controller{
    constructor(){
        super(userService);
    }

    // async getUserDetail(req, res){
    //     try {
    //         const {id} = req.params;
    //     } catch(error){
            
    //     }
    // }
}

export default new UserController();