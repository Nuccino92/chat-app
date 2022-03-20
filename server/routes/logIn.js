const express = require("express");
const { logIn_POST } = require("../controllers/logIn.js");

const router = express.Router();

router.post("/", logIn_POST);

module.exports = router;
