import { Router } from "express";
import taskController from "../controllers/TaskController.js"

const taskRoutes = Router();

taskRoutes.get('/', taskController.getAll.bind(taskController));
taskRoutes.post('/', taskController.create.bind(taskController));
taskRoutes.put('/:id', taskController.update.bind(taskController));
taskRoutes.delete('/:id', taskController.delete.bind(taskController));

export default taskRoutes;