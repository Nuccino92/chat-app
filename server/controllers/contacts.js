const { sequelize, Contact } = require("../models");

const allContacts_GET = async (req, res) => {
  res.send("got all contacts");
};

const confirmedContacts_GET = async (req, res) => {
  res.send("got all accepted contacts ");
};

const pendingContact_GET = async (req, res) => {
  res.send("got all pending contacts");
};

const createContact_POST = async (req, res) => {
  const { user2 } = req.body;
  const { id } = req.params;

  const confirmed = 0;

  await Contact.create({
    userID1: id,
    userID2: user2,
    confirmed,
  })
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

const acceptContact_POST = async (req, res) => {
  res.send("accepted");
};

const declineContact_POST = async (req, res) => {
  res.send("declined");
};

module.exports = {
  createContact_POST,
  acceptContact_POST,
  declineContact_POST,
  allContacts_GET,
  confirmedContacts_GET,
  pendingContact_GET,
};
