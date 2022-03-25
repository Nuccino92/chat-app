const express = require("express");
const {
  getConversation_GET,
  startConversation_POST,
  getConversationMessages_GET,
  getAllUserConversations_GET,
  deleteConversation_DELETE,
} = require("../controllers/conversation.js");

const router = express.Router();

router.get("/all/:id", getAllUserConversations_GET);
router.get("/find/:user1/:user2", getConversation_GET);
router.post("/start/:id", startConversation_POST);
router.get("/messages/:conversationID", getConversationMessages_GET);
router.delete("/delete/:user1/:user2", deleteConversation_DELETE);

module.exports = router;
