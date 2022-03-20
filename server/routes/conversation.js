const express = require("express");
const {
  getConversation_GET,
  startConversation_POST,
  getConversationMessages_GET,
} = require("../controllers/conversation.js");

const router = express.Router();

router.get("/", getConversation_GET);
router.post("/start", startConversation_POST);
router.get("/messages/:conversationId", getConversationMessages_GET);

module.exports = router;
