const passport = require("passport");
const passportLocal = require("passport-local");
const passportJWT = require("passport-jwt");
const dotenv = require("dotenv");

const { compareHash } = require("../utils/passwords");
const { User } = require("../models");

const LocalStrategy = passportLocal.Strategy;
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

dotenv.config();
const secretKey = process.env.JWT_SECRET;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, cb) {
      const newEmail = email.toLowerCase();

      return await User.findOne({
        where: { email: newEmail },
      })
        .then((user) => {
          if (!user) {
            return cb(null, false, {
              msg: "Incorrect email or password",
              param: null,
            });
          }
          if (!compareHash(password, user.password)) {
            return cb(null, false, {
              msg: "Incorrect email or password",
              param: null,
            });
          }
          return cb(null, user, { message: "Logged in successfully" });
        })
        .catch((err) => {
          cb(err), console.log(err);
        });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: secretKey,
    },
    async (jwtPayload, cb) => {
      return await User.findByPk(jwtPayload.id)
        .then((user) => {
          if (user) {
            return cb(null, user);
          }
          return cb(null, false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  )
);
