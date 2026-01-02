import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController{
    async handle(req: Request, res: Response){
        
        const user_id = req.user_id;

        const detailService = new DetailUserService();

        const user = await detailService.execute({user_id});

        return res.status(201).json(user);
    }
}

export { DetailUserController };