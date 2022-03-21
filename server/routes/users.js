const express = require("express");
const passport = require("passport");

const { updateUser_PUT, authUser_GET } = require("../controllers/users.js");

const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

router.get("/auth/:id", auth, authUser_GET);
router.put("/:id", updateUser_PUT);

module.exports = router;
