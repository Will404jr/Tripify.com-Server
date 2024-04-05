const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Enforce uniqueness for email
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("Auth", AuthSchema);

module.exports = collection;
