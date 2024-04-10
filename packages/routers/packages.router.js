const express = require("express");
const packageRouter = express.Router();
const {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackageById,
  deletePackageById,
} = require("../controllers/packages.controller");

// Route to create a new package
packageRouter.post("/api/packages", createPackage);

// Route to get all packages
packageRouter.get("/api/packages", getAllPackages);

// Route to get a single package by ID
packageRouter.get("/api/packages/:id", getPackageById);

// Route to update a package by ID
packageRouter.put("/api/packages/:id", updatePackageById);

// Route to delete a package by ID
packageRouter.delete("/api/packages/:id", deletePackageById);

module.exports = packageRouter;
