const { Conversations, Messages } = require("../models");
const { Op } = require("sequelize");

const getAllUserConversations = async (req, res) => {
  const { id } = req.params;

  await Conversations.findAll({
    where: {
      [Op.or]: [{ userID1: id }, { userID2: id }],
    },
  })
    .then((conversations) => {
      return res.status(201).json(conversations);
    })
    .catch((err) => {
      return res.status(500).json({ error: "Oops! Unable to update user" });
    });
};

const getConversation_GET = async (req, res) => {
  const { user1, user2 } = req.params;

  await Conversations.findOne({
    where: {
      [Op.and]: [
        { [Op.or]: [{ userID1: user1 }, { userID2: user1 }] },
        { [Op.or]: [{ userID1: user2 }, { userID2: user2 }] },
      ],
    },
  })
    .then(async (conversation) => {
      return res.status(201).json(conversation);
    })
    .catch((err) => {
      return res.status(500).json({ error: "Oops! Unable to update user" });
    });
};

const startConversation_POST = async (req, res) => {
  const { id } = req.params;
  const { user2 } = req.body;

  await Conversations.create({
    userID1: id,
    userID2: user2,
  })
    .then((conversation) => {
      return res.status(201).json(conversation);
    })
    .catch((err) => {
      return res.status(500).kson(err);
    });
};

const getConversationMessages_GET = async (req, res) => {
  const { conversationID } = req.params;

  await Messages.findAll({ where: { conversationID } })
    .then((messages) => {
      return res.status(201).json(messages);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports = {
  getConversation_GET,
  startConversation_POST,
  getConversationMessages_GET,
  getAllUserConversations,
};
