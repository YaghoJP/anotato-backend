import { Router } from "express";

import userRoutes from "./UserRoutes.js";
import taskRoutes from "./TaskRoutes.js";

const router = Router();

router.use('/users', userRoutes);
router.use('/task', taskRoutes);

export default router;