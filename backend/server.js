require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const path = require("path"); // Import the 'path' module

const User = require("./models/user");

const port = process.env.PORT || 4000;
const uri = process.env.MONGO_URI;

const app = express();

app.use(express.json());
app.use(cors());

//  TEST API
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to tbs server" });
});

const routes = require("./routes/fromRoute");

// Connect to DB
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use("/api", routes);
