import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { authHandler } from "./middlewares/authHandler";

const router = Router();

//Users
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/teste", authHandler);

export { router };