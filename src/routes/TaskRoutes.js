import { Router } from "express";
import taskController from "../controllers/TaskController.js"
import authMiddleware from "../middlewares/authMiddleware.js";

const taskRoutes = Router();

taskRoutes.get('/', authMiddleware, taskController.getAll.bind(taskController));
taskRoutes.get('/user', authMiddleware, taskController.getTaskByUser.bind(taskController));
taskRoutes.post('/', authMiddleware, taskController.create.bind(taskController));
taskRoutes.put('/:id', authMiddleware, taskController.update.bind(taskController));
taskRoutes.delete('/:id', authMiddleware, taskController.delete.bind(taskController));
taskRoutes.put('/complete/:id', authMiddleware, taskController.completeTask.bind(taskController));

export default taskRoutes;