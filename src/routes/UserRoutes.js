import { Router } from "express";
import userController from "../controllers/UserController.js";

const userRoutes = Router();

userRoutes.get('/', userController.getAll.bind(userController));
userRoutes.post('/', userController.create.bind(userController));
userRoutes.put('/:id', userController.update.bind(userController));
userRoutes.delete('/:id', userController.delete.bind(userController));

export default userRoutes;