const express = require("express");

const {
  registerUser,
  loginUser,
  getProfile,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Authentication
router.post("/login", loginUser);

// Profile
router.get("/profile", protect, getProfile);

// Forgot Password
router.post(
  "/forgot-password",
  forgotPassword
);

// Reset Password
router.put(
  "/reset-password/:token",
  resetPassword
);

module.exports = router;