import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { PayloadDTO } from "../dtos/user/AuthUserDTO";
import { AppError } from "../shared/errors/AppError";

export function authHandler(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization;

    if(!authToken){
        throw new AppError("Token is invalid", 401);
    }

    const [_, token] = authToken.split(" ");

    const {sub} = verify(token!, process.env.JWT_SECRET as string) as PayloadDTO

    req.user_id = sub;

    return next();
}
