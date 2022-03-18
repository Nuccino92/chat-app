const express = require("express");
const { requestContact_POST } = require("../controllers/contacts");

const router = express.Router();

router.post("/request/:user1", requestContact_POST);

module.exports = router;
