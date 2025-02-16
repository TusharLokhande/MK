import express, { Express } from "express";
import passport from "./config/passportConfig"; // Passport configuration
import session from "express-session";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes";

dotenv.config(); // Load environment variables

const app: Express = express();

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session()); 

app.use("/api/auth",authRouter);


export default app;
