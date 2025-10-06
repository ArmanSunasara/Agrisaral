const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const authRoutes = require("./routes/authRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const diagnosisRoutes = require("./routes/diagnosisRoutes");
const shopRoutes = require("./routes/shopRoutes");
const plantIdRoute = require("./routes/plantIdRoute");

app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/diagnose", diagnosisRoutes);
app.use("/api/shops", shopRoutes);
app.use("/api/plant", plantIdRoute);
// Use morgan for logging HTTP requests
app.use(morgan("dev"));

module.exports = app;
