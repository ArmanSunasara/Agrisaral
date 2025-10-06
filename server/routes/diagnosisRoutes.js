// Diagnosis routes
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { diagnoseImage } = require("../controllers/diagnosisController");

router.get("/:uploadId", auth, diagnoseImage);

module.exports = router;
