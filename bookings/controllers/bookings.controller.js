const Booking = require("../bookings.model");

// Function to generate a random booking ID with no more than 4 characters
function generateBookingID() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let bookingID = "";
  for (let i = 0; i < 4; i++) {
    bookingID += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return bookingID;
}

// Controller methods
const bookingController = {
  // Create a new booking
  createBooking: async (req, res) => {
    try {
      const {
        fullNames,
        tellNumber,
        destination,
        chosenBus,
        selectedDate,
        shippingTime,
        selectedSeat,
      } = req.body;
      const bookingID = generateBookingID();
      const newBooking = new Booking({
        bookingID,
        fullNames,
        tellNumber,
        destination,
        chosenBus,
        selectedDate,
        shippingTime,
        selectedSeat,
      });
      const savedBooking = await newBooking.save();
      res.status(201).json(savedBooking);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Retrieve all bookings
  getAllBookings: async (req, res) => {
    try {
      const bookings = await Booking.find();
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Retrieve a single booking by ID
  getBookingById: async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      if (booking) {
        res.json(booking);
      } else {
        res.status(404).json({ message: "Booking not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Update a booking by ID
  updateBooking: async (req, res) => {
    try {
      const {
        fullNames,
        tellNumber,
        destination,
        chosenBus,
        selectedDate,
        shippingTime,
        selectedSeat,
      } = req.body;
      const booking = await Booking.findById(req.params.id);
      if (booking) {
        booking.fullNames = fullNames;
        booking.tellNumber = tellNumber;
        booking.destination = destination;
        booking.chosenBus = chosenBus;
        booking.selectedDate = selectedDate;
        booking.shippingTime = shippingTime;
        booking.selectedSeat = selectedSeat;
        const updatedBooking = await booking.save();
        res.json(updatedBooking);
      } else {
        res.status(404).json({ message: "Booking not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Delete a booking by ID
  deleteBooking: async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      if (booking) {
        await booking.remove();
        res.json({ message: "Booking deleted" });
      } else {
        res.status(404).json({ message: "Booking not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = bookingController;
