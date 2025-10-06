const express = require("express");
const router = express.Router();
const multer = require("multer");
const axios = require("axios");
require("dotenv").config();

// Multer setup
const upload = multer({ storage: multer.memoryStorage() });

router.post("/identify", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Image not provided" });
    }

    const base64Image = req.file.buffer.toString("base64");

    const response = await axios.post(
      "https://api.plant.id/v2/health_assessment",
      {
        images: [`data:image/jpeg;base64,${base64Image}`],
        modifiers: ["similar_images"],
        plant_details: ["disease", "description", "common_names"],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Api-Key": process.env.PLANT_ID_API_KEY,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (err) {
    console.error("Plant ID API error:", err.message);
    res.status(500).json({ error: "Plant ID API failed" });
  }
});

module.exports = router;
