const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const registerRouter = require("./auth/routers/register.router");
const loginRouter = require("./auth/routers/login.router");
const busRouter = require("./bus/bus.router");
const imagesRouter = require("./busImages/routers/images.router");

const app = express();

app.use(express.json());
app.use(cors());

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

app.use(imagesRouter);

app.listen(5000, (req, res) => {
  console.log("Server running on port 5000");
});
