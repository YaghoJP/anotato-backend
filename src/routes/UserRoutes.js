import { Router } from "express";
import userController from "../controllers/UserController.js";

const userRoutes = Router();

userRoutes.get('/', userController.getAll.bind(userController));

export default userRoutes;