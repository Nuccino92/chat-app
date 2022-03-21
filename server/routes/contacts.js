const express = require("express");
const {
  createContact_POST,
  acceptContact_PUT,
  declineContact_DELETE,
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
router.put("/accept/:id", acceptContact_PUT);

//deletes contact table
router.delete("/decline/:id", declineContact_DELETE);

module.exports = router;
