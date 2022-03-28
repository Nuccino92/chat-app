const express = require("express");
const passport = require("passport");

const { createMessage_POST } = require("../controllers/messages.js");

const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

router.post("/create", auth, createMessage_POST);

module.exports = router;
