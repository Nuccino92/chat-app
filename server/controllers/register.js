const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { generateHash } = require("../utils/passwords.js");

const register_POST = async (req, res) => {
  const { firstName, lastName, email, password, profilePicture } = req.body;

  await User.create({
    firstName,
    lastName,
    email,
    password: generateHash(password),
    profilePicture,
  })
    .then((user) => {
      jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        { expiresIn: 86400 },
        async (err, token) => {
          if (err) throw err;
          await User.findByPk(user.id).then((user) => {
            res.status(201).json({ token, user });
          });
        }
      );
    })
    .catch((err) => {
      return res.status(500).json(err.message);
    });
};

module.exports = {
  register_POST,
};
