const { User } = require("../models");

// returns user if passes passport auth jwt
const authUser_GET = async (req, res) => {
  const { id } = req.params;

  await User.findByPk(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

// updates user
const updateUser_PUT = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, profilePicture } = req.body;

  await User.findByPk(id)
    .then(async (user) => {
      await user.update({ firstName, lastName, profilePicture });
      await user.save();
      return res.status(201).json(user);
    })
    .catch((err) => {
      return res.status(500).json({ error: "Oops! Unable to update user" });
    });
};

module.exports = {
  updateUser_PUT,
  authUser_GET,
};
