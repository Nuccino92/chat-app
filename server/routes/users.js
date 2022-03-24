const express = require("express");
const passport = require("passport");
const multer = require("multer");

const {
  updateUser_PUT,
  authUser_GET,
  getUser_GET,
} = require("../controllers/users.js");

const router = express.Router();

const auth = passport.authenticate("jwt", { session: false });

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: fileStorageEngine,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});

router.get("/find/:id", getUser_GET);
router.get("/auth", auth, authUser_GET);
router.put("/:id", upload.single("profilePicture"), updateUser_PUT);

module.exports = router;
