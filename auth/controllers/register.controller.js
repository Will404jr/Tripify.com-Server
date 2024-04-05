const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const collection = require("../auth.model");

async function register(req, res) {
  try {
    const { email, password } = req.body;

    // Check if the email already exists
    const existingUser = await collection.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

    // Create a new user with the hashed password
    const newUser = new collection({
      email: email,
      password: hashedPassword,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(200).json(savedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  register,
};
