// Shop controller
const AgriShop = require("../models/AgriShop");

exports.getAllShops = async (req, res) => {
  try {
    const shops = await AgriShop.find();
    res.json(shops);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch shops" });
  }
};

exports.createShop = async (req, res) => {
  try {
    const shop = new AgriShop(req.body);
    await shop.save();
    res.status(201).json(shop);
  } catch (error) {
    res.status(500).json({ error: "Failed to create shop" });
  }
};
