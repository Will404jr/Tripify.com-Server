const Images = require("../images.model");

// Controller function to get images for a company
async function getImagesByCompany(req, res) {
  try {
    const companyName = req.params.companyName;

    // Find images by company name in the database
    const images = await Images.findOne({ companyName });

    if (!images) {
      return res
        .status(404)
        .json({ message: "Images not found for the company" });
    }

    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getImagesByCompany,
};
