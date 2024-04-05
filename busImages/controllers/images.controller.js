const Images = require("../images.model");

// Controller function to upload images for a company
async function uploadImages(req, res) {
  try {
    const { companyName, imageUrls } = req.body; // Change `images` to `imageUrls`

    // Check if the company already exists
    let company = await Images.findOne({ companyName });

    if (!company) {
      // If the company doesn't exist, create a new document
      company = new Images({
        companyName,
        images: imageUrls, // Store imageUrls in the `images` field
      });
    } else {
      // If the company exists, update the images array
      company.images = imageUrls;
    }

    // Save the company document to the database
    const savedCompany = await company.save();

    res.status(200).json(savedCompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  uploadImages,
};
