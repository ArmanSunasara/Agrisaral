// AgriShop model
const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  shopName: String,
  address: String,
  city: String,
  pinCode: String,
  coordinates: {
    lat: Number,
    lng: Number
  },
  availableProducts: [String]
});

module.exports = mongoose.model("AgriShop", shopSchema);
