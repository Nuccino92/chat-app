const jwt = require("jsonwebtoken");
const passport = require("passport");

const { User } = require("../models");

const logIn_POST = async (req, res, next) => {
  const { email, password } = req.body;

  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (!email) {
      return res.status(401).json({
        msg: "Please enter an email",
        param: "email",
      });
    }
    if (!password) {
      return res.status(401).json({
        msg: "Please enter a password",
        param: "password",
      });
    }
    if (err) {
      return res.status(401).json({
        msg: err.message,
        param: null,
      });
    }
    if (!user) {
      return res.status(401).json({
        msg: "You entered incorrect information",
        user: user,
        param: null,
      });
    }

    req.login(user, { session: false }, (err) => {
      jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        // 24 hours
        { expiresIn: 86400 },
        async (err, token) => {
          if (err) throw err;
          await User.findByPk(user.id).then((user) => {
            res.status(201).json({ token, user });
          });
        }
      );
    });
  })(req, res, next);
};

module.exports = {
  logIn_POST,
};
