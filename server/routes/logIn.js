const express = require("express");
const passport = require("passport");

const { logIn_POST } = require("../controllers/logIn.js");

const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

router.post("/", auth, logIn_POST);

module.exports = router;
