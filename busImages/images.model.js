const mongoose = require("mongoose");

const ImagesSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: false,
    unique: true,
  },
  images: {
    type: [String], // Array of image URLs
    required: true,
  },
});

const Images = mongoose.model("Images", ImagesSchema);

module.exports = Images;
