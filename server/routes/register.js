const express = require("express");
const passport = require("passport");

const { register_POST } = require("../controllers/register.js");
const registerValidation = require("../validation/register.js");

const router = express.Router();

router.post("/", registerValidation, register_POST);

module.exports = router;
