const Lost = require("../lost.model");

// Controller function to create a new lost item
exports.createLostItem = async (req, res) => {
  try {
    const { description, station, contact, images } = req.body;
    const newLostItem = new Lost({
      description: description,
      station: station,
      contact: contact,
      images: images,
    });
    const savedLostItem = await newLostItem.save();
    res.status(201).json(savedLostItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to retrieve all lost items
exports.getAllLostItems = async (req, res) => {
  try {
    const lostItems = await Lost.find();
    res.json(lostItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a specific lost item by its ID
exports.deleteLostItem = async (req, res) => {
  try {
    const deletedLostItem = await Lost.findByIdAndDelete(req.params.id);
    if (!deletedLostItem) {
      return res.status(404).json({ message: "Lost item not found" });
    }
    res.json({ message: "Lost item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
