const express = require("express");
const { register_POST } = require("../controllers/register.js");

const router = express.Router();

router.post("/", register_POST);

module.exports = router;
