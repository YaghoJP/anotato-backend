import Controller from "./Controller.js";
import userService from "../services/UserService.js";

class UserController extends Controller{
    constructor(){
        super(userService);
    }

    async login(req, res){
        try {
            const {email, password} = req.body;

            const result = await this.entidadeService.login(email, password);

            return res.status(200).json(result);
        }catch(error){
            return res.status(400).json({
                error: error.message
            })   
        }
    }
}

export default new UserController();