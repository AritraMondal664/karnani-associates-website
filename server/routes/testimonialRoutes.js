const express = require("express");

const {
  createTestimonial,
  getTestimonials,
  updateTestimonial,
  deleteTestimonial,
} = require("../controllers/testimonialController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(getTestimonials)
  .post(protect, createTestimonial);

router
  .route("/:id")
  .put(protect, updateTestimonial)
  .delete(protect, deleteTestimonial);

module.exports = router;