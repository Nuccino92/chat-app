const { sequelize, User } = require("../models");

const register_POST = async (req, res) => {
  const { firstName, lastName, email, password, profilePicture } = req.body;

  await User.create({
    firstName,
    lastName,
    email,
    password,
    profilePicture,
  })
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports = {
  register_POST,
};
