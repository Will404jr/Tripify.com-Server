const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const collection = require("../auth.model");

async function register(req, res) {
  try {
    const { email, password, accountType } = req.body;

    // Check if the email already exists
    const existingUser = await collection.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Set accountType to 'user' if not provided or empty
    const finalAccountType = accountType || "user";

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds

    // Create a new user with the hashed password and account type
    const newUser = new collection({
      email: email,
      password: hashedPassword,
      accountType: finalAccountType,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(200).json(savedUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

async function getAllAccounts(req, res) {
  try {
    const { accountType } = req.query;
    let query = {};

    // If accountType is provided in the query, filter by it
    if (accountType) {
      query = { accountType: accountType };
    }

    const allAccounts = await collection.find(query);
    res.status(200).json(allAccounts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  register,
  getAllAccounts,
};
