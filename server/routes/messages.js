const express = require("express");

const { createMessage_POST } = require("../controllers/messages.js");

const router = express.Router();

router.post("/create", createMessage_POST);

module.exports = router;
