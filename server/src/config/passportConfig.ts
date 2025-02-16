import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import { User } from "./models/User"; // Import your User model
import dotenv from "dotenv";

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log(profile);
        done(null, profile);

      } catch (err) {
        done(err, false);
      }
    }
  )
);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, 1);
});

passport.deserializeUser(async (id, done) => {
  try {
    done(null, {});
  } catch (err) {
    done(err, null);
  }
});

export default passport;
