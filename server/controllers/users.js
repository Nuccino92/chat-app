const { User } = require("../models");
const cloudinary = require("../utils/cloudinary.js");

const getUser_GET = async (req, res) => {
  const { id } = req.params;

  await User.findByPk(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
};

// returns user if passes passport auth jwt
const authUser_GET = async (req, res) => {
  await User.findByPk(req.user.id)
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
  const { firstName, lastName } = req.body;

  if (req.file) {
    const { path } = req.file;

    const result = await cloudinary.uploader.upload(path);

    await User.findByPk(id)
      .then(async (user) => {
        await user.update({
          firstName,
          lastName,
          profilePicture: result.secure_url,
        });
        await user.save();
        return res.status(201).json(user);
      })
      .catch(() => {
        return res.status(500).json({ error: "Oops! Unable to update user" });
      });
  } else {
    await User.findByPk(id)
      .then(async (user) => {
        await user.update({
          firstName,
          lastName,
        });
        await user.save();
        return res.status(201).json(user);
      })
      .catch(() => {
        return res.status(500).json({ error: "Oops! Unable to update user" });
      });
  }
};

module.exports = {
  updateUser_PUT,
  authUser_GET,
  getUser_GET,
};
