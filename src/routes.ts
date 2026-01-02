import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { authHandler } from "./middlewares/authHandler";
import { DetailUserController } from "./controllers/user/DetailUserController";

const router = Router();

//Users
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/users/detail", authHandler, new DetailUserController().handle);

export { router };