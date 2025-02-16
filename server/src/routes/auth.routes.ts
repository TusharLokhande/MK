import { Router } from "express";
import { authGoogleUser, GoogleCallback } from "../controllers/auth.controllers";
import passport from "../config/passportConfig";
import { googleAuthMiddleware, googleAuthFailureMiddleWare } from "../middlewares/auth.middlewares";


const authRouter:Router = Router();

authRouter.get("/google", googleAuthMiddleware);
authRouter.get("/google/callback",googleAuthFailureMiddleWare,GoogleCallback);


export default authRouter;