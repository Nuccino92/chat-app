const express = require("express");
const passport = require("passport");

const {
  createContact_POST,
  acceptContact_PUT,
  declineContact_DELETE,
  allContacts_GET,
  confirmedContacts_GET,
  pendingContact_GET,
} = require("../controllers/contacts.js");

const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

// id is user making request
router.get("/:id", auth, allContacts_GET);
router.get("/confirmed/:id", auth, confirmedContacts_GET);
router.get("/pending/:id", auth, pendingContact_GET);
router.post("/create/:id", auth, createContact_POST);

//id is contact id
router.put("/accept/:id", auth, acceptContact_PUT);
router.delete("/decline/:user1/:user2", auth, declineContact_DELETE);

module.exports = router;
