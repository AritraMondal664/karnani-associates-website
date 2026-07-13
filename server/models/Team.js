const mongoose = require('mongoose');

const teamSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String },
    photoUrl: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Team', teamSchema);
