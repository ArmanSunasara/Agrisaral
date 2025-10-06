// Shop routes
const express = require("express");
const router = express.Router();
const { getAllShops, createShop } = require("../controllers/shopController");

router.get("/", getAllShops);
router.post("/", createShop);

module.exports = router;
