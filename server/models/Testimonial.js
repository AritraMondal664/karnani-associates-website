const mongoose = require('mongoose');

const testimonialSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String },
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);
