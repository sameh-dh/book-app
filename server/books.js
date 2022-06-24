const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  AurthorName: {
    type: Number,
    required: true,
  },
  Price:Number
});

const BookModel = mongoose.model("users", BookSchema);
module.exports = BookModel;