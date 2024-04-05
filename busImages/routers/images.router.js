const express = require("express");
const imagesRouter = express.Router();
const imagesController = require("../controllers/images.controller");

// Route for uploading images for a company
imagesRouter.post("/api/uploadImages", imagesController.uploadImages);

module.exports = imagesRouter;
