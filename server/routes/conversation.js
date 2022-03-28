const express = require("express");
const passport = require("passport");

const {
  getConversation_GET,
  startConversation_POST,
  getConversationMessages_GET,
  getAllUserConversations_GET,
  deleteConversation_DELETE,
} = require("../controllers/conversation.js");

const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

router.get("/all/:id", auth, getAllUserConversations_GET);
router.get("/find/:user1/:user2", auth, getConversation_GET);
router.post("/start/:id", auth, startConversation_POST);
router.get("/messages/:conversationID", auth, getConversationMessages_GET);
router.delete("/delete/:user1/:user2", auth, deleteConversation_DELETE);

module.exports = router;
