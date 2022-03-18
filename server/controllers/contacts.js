const { sequelize, Contact } = require("../models");

const requestContact_POST = async (req, res) => {
  const { user2 } = req.body;
  const { user1 } = req.params;

  const contact = 0;

  await Contact.create({
    user1,
    user2,
    contact,
  })
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports = {
  requestContact_POST,
};
