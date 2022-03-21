const express = require("express");
const {
  getConversation_GET,
  startConversation_POST,
  getConversationMessages_GET,
} = require("../controllers/conversation.js");

const router = express.Router();

router.get("/find/:user1/:user2", getConversation_GET);
router.post("/start/:id", startConversation_POST);
router.get("/messages/:conversationID", getConversationMessages_GET);

module.exports = router;
