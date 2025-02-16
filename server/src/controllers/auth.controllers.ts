import passport from "../config/passportConfig";
import { Request, Response } from "express";

export const authGoogleUser =  () => {
    passport.authenticate('google', { scope: ['profile', 'email'] })
}

export const GoogleCallback=  (req: Request, res: Response) =>{
    res.redirect("/dashboard");
}