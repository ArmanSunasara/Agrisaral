// Upload model
const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  imageUrl: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  diagnosis: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Upload", uploadSchema);
