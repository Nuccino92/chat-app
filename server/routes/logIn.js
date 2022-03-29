const express = require("express");
const passport = require("passport");

const { logIn_POST } = require("../controllers/logIn.js");

const router = express.Router();

router.post("/", logIn_POST);

module.exports = router;
