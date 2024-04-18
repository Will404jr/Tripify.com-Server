const express = require("express");
const {
  register,
  getAllAccounts,
} = require("../controllers/register.controller");

const registerRouter = express.Router();

// Register a new user
registerRouter.post("/api/register", register);

// Get all accounts
registerRouter.get("/api/accounts", getAllAccounts);

module.exports = registerRouter;
