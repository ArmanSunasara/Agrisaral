// Upload routes
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const { uploadImage } = require("../controllers/uploadController");

// Upload image
router.post("/", auth, upload.single("image"), uploadImage);

// Get previous uploads for the logged-in user
const Upload = require("../models/Upload");
router.get("/history", auth, async (req, res) => {
  try {
    const uploads = await Upload.find({ user: req.user.id })
      .populate("user", "name email")
      .sort({ createdAt: -1 });
    res.json(uploads);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch history" });
  }
});

module.exports = router;
