import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const userRouter = Router();

userRouter.post("/create", new CreateUserController().handle);

export {userRouter};