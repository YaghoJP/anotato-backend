import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { authHandler } from "./middlewares/authHandler";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { GoogleAuthController } from "./controllers/user/GoogleAuthController";

const router = Router();

//Users
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/users/detail", authHandler, new DetailUserController().handle);
router.get("/user/session/google", new GoogleAuthController().redirectToGoogle);
router.get("/user/session/google/callback", new GoogleAuthController().googleCallback);

export { router };