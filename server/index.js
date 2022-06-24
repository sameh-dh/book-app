const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://sameh:sameh123@books.yvtzvau.mongodb.net/test"
);

app.listen(3000, () => {
  console.log("SERVER RUNS PERFECTLY!");
});