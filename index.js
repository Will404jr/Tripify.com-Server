const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const registerRouter = require("./auth/routers/register.router");
const loginRouter = require("./auth/routers/login.router");
const busRouter = require("./bus/routers/bus.router");
const imagesRouter = require("./busImages/routers/images.router");
const displayBusRouter = require("./bus/routers/displayBus.router");
const displayImageRouter = require("./busImages/routers/displayImages.router");
const lostRouter = require("./lostAndFound/routers/lost.router");
const packageRouter = require("./packages/routers/packages.router");
const bookingsRouter = require("./bookings/routers/bookings.router");
const adminEmailRouter = require("./adminEmail/mail.router");

const app = express();

app.use(express.json({ limit: "10mb" })); // Increased body size limit to 10mb
app.use(cors());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to this api service",
  });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/Authentication")
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.error("Database connection failed:", e);
  });

app.use(registerRouter);
app.use(loginRouter);

app.use(busRouter);
app.use(displayBusRouter);

app.use(imagesRouter);
app.use(displayImageRouter);

app.use(lostRouter);

app.use(bookingsRouter);

app.use(packageRouter);

app.use(adminEmailRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
