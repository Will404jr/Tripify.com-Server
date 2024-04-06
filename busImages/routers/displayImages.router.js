const express = require("express");
const displayImageRouter = express.Router();
const displayImagesController = require("../controllers/displayImages.controller");

// Route for getting images for a company
displayImageRouter.get(
  "/api/images/:companyName",
  displayImagesController.getImagesByCompany
);

module.exports = displayImageRouter;
