const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
  fullNames: {
    type: String,
    required: true,
  },
  tellNumber: {
    type: Number,
    required: true,
  },
  recipientsNames: {
    type: String,
    required: true,
  },
  recipientsNumber: {
    type: Number,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  chosenBus: {
    type: String,
    required: true,
  },
  shippingDate: {
    type: Date,
    required: true,
  },
  shippingTime: {
    type: String,
    required: true,
  },
});

const Package = mongoose.model("Package", PackageSchema);

module.exports = Package;
