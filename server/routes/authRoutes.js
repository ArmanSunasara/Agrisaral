// Auth routes
const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const rateLimit = require("express-rate-limit");
const { body } = require("express-validator");
const validate = require("../middleware/validate");

// Specific tight rate limit for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
});

// Validation chains
const registerValidation = [
  body("name").trim().isLength({ min: 2, max: 100 }),
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 8, max: 128 }),
];

const loginValidation = [
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 8, max: 128 }),
];

router.post("/register", authLimiter, registerValidation, validate, register);
router.post("/login", authLimiter, loginValidation, validate, login);

module.exports = router;
