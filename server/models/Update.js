const mongoose = require('mongoose');

const updateSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Update', updateSchema);
