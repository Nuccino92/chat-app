const express = require("express");
const {
  createContact_POST,
  acceptContact_POST,
  declineContact_POST,
  allContacts_GET,
  confirmedContacts_GET,
  pendingContact_GET,
} = require("../controllers/contacts.js");

const router = express.Router();

// id is user making request
router.get("/:id", allContacts_GET);
router.get("/confirmed/:id", confirmedContacts_GET);
router.get("/pending/:id", pendingContact_GET);
router.post("/create/:id", createContact_POST);
router.post("/accept/:id", acceptContact_POST);
router.post("/decline/:id", declineContact_POST);

module.exports = router;
