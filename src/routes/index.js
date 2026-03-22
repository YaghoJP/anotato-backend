import { Router } from "express";

import userRoutes from "./UserRoutes.js";

const router = Router();

router.use('/users', userRoutes);

export default router;