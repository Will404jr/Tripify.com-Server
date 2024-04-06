const mongoose = require("mongoose");

const LostSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    unique: true,
  },
  station: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
    unique: true,
  },
  images: {
    type: [String], // Array of image URLs
    required: true,
  },
});

const Lost = mongoose.model("Lost", LostSchema);

module.exports = Lost;
