const { Messages } = require("../models");

const createMessage_POST = async (req, res) => {
  const { conversationID, senderID, content } = req.body;

  await Messages.create({
    conversationID,
    senderID,
    content,
  })
    .then((message) => {
      return res.status(201).json(message);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

module.exports = {
  createMessage_POST,
};
