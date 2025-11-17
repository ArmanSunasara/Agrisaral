const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const morgan = require("morgan");

// Logging early
app.use(morgan("dev"));

// Security headers
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "same-origin" },
  })
);

// CORS - restrict through env, default to local dev client
const allowedOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";
app.use(
  cors({
    origin: function (origin, callback) {
      // allow REST tools and same-origin
      if (!origin) return callback(null, true);
      if (origin === allowedOrigin) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: false,
  })
);

// Body parsers with sane limits
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Basic rate limiter for public endpoints
const publicLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // per IP
});
app.use(publicLimiter);

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
// Central error handler (must be last)
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

module.exports = app;
