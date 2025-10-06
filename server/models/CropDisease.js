const mongoose = require("mongoose");

const cropDiseaseSchema = new mongoose.Schema({
  crop: String,
  disease: String,
  description: String,
  solution: String,
  prevention: String
});

module.exports = mongoose.model("CropDisease", cropDiseaseSchema);

