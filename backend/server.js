const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(
  "mongodb+srv://atulsahani8888:RpLeW81gFZse0Slp@cluster0.cu32gzi.mongodb.net/login",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(bodyParser.json());
app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
