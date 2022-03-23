const { User } = require("../models");

const { check, validationResult } = require("express-validator");

const registerValidation = [
  check("firstName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter a first name")
    .bail(),

  check("lastName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter a last name")
    .bail(),

  check("email")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter a valid email")
    .bail()
    .isLength({ min: 2, max: 30 })
    .withMessage("Email must be between 2 and 30 characters")
    .bail()
    .isEmail()
    .withMessage("Invalid email address")
    .bail()
    .custom(async (email) => {
      const newEmail = email.toLowerCase();
      const existing = await User.findOne({
        where: { email: newEmail },
      });
      if (existing) {
        return Promise.reject("Email taken");
      }
    })
    .withMessage("Email already taken")
    .bail(),

  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please enter a password")
    .bail()
    .isLength({ min: 5, max: 25 })
    .withMessage("Password must be at least 5 characters")
    .bail()
    .matches(/\d/)
    .withMessage("Password must contain a number")
    .bail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array());
    } else next();
  },
];

module.exports = registerValidation;
