import { Router } from "express";
import userController from "../controllers/UserController.js";
import authMiddleware from "../middlewares/authMiddleware.js"

const userRoutes = Router();

userRoutes.get('/', userController.getAll.bind(userController));
userRoutes.post('/', authMiddleware, userController.create.bind(userController));
userRoutes.post('/login', userController.login.bind(userController));
userRoutes.put('/:id', userController.update.bind(userController));
userRoutes.delete('/:id', userController.delete.bind(userController));

export default userRoutes;