import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController{
    async handle(req: Request, res: Response){

        console.log(req.body)

       const {email, senha} = req.body;

       const authService = new AuthUserService();

       return res.status(201).json(
        await authService.execute({email,senha})
       );
    }
}

export { AuthUserController };