import passport from "../config/passportConfig";

export const googleAuthMiddleware = passport.authenticate('google', {
    scope: ['profile', 'email'],
});

export const googleAuthFailureMiddleWare =  passport.authenticate("google", { failureRedirect: "/" });