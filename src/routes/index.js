import { Router } from "express";

import userRoutes from "./UserRoutes.js";
import taskRoutes from "./TaskRoutes.js";

const router = Router();

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);

export default router;