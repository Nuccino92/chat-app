const { Contact } = require("../models");
const { Op } = require("sequelize");

const allContacts_GET = async (req, res) => {
  const { id } = req.params;
  await Contact.findAll({
    where: {
      [Op.or]: [{ userID1: id }, { userID2: id }],
    },
  })
    .then((contacts) => {
      return res.status(201).json(contacts);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

const confirmedContacts_GET = async (req, res) => {
  const { id } = req.params;
  await Contact.findAll({
    where: {
      confirmed: 1,
      [Op.or]: [{ userID1: id }, { userID2: id }],
    },
  })
    .then((contacts) => {
      return res.status(201).json(contacts);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

const pendingContact_GET = async (req, res) => {
  const { id } = req.params;
  await Contact.findAll({
    where: {
      confirmed: 0,
      [Op.or]: [{ userID1: id }, { userID2: id }],
    },
  })
    .then((contacts) => {
      return res.status(201).json(contacts);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
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

const acceptContact_PUT = async (req, res) => {
  const { id } = req.params;
  const { user2 } = req.body;

  await Contact.findOne({
    where: {
      [Op.or]: [{ userID1: id }, { userID2: id }],
      [Op.or]: [{ userID1: user2 }, { userID2: user2 }],
    },
  })
    .then(async (contact) => {
      await contact.update({ confirmed: 1 });
      await contact.save();
      return res.status(201).json(contact);
    })
    .catch((err) => {
      return res.status(500).json({ error: "Oops! Unable to update user" });
    });
};

const declineContact_DELETE = async (req, res) => {
  const { id } = req.params;
  const { user2 } = req.body;

  await Contact.findOne({
    where: {
      [Op.or]: [{ userID1: id }, { userID2: id }],
      [Op.or]: [{ userID1: user2 }, { userID2: user2 }],
    },
  })
    .then(async (contact) => {
      await contact.destroy();
      return res.status(201).json({ msg: "user deleted" });
    })
    .catch((err) => {
      return res.status(500).json({ error: "Oops! Unable to update user" });
    });
};

module.exports = {
  createContact_POST,
  acceptContact_PUT,
  declineContact_DELETE,
  allContacts_GET,
  confirmedContacts_GET,
  pendingContact_GET,
};
