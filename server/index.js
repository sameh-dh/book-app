const express = require("express");
const app = express();
const BookModel=require("./books")
const mongoose = require("mongoose");

const cors = require("cors");
mongoose.connect(
  "mongodb+srv://samehdh:samehdh123@cluster0.8cq1msh.mongodb.net/book?retryWrites=true&w=majority"
);
app.use(express.json());
app.use(cors());
// get all books
app.get("/getBooks", (req, res) => {
  BookModel.find({}, (err, result) => {
    
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
//add new book
app.post("/createBook", async (req, res) => {
  const book = req.body;
  const newBook = new BookModel(book);
  await newBook.save();

  res.json(book);
});
app.listen(3002, () => {
  console.log("SERVER RUNS PERFECTLY!");
});




const conn = mongoose.connection;

// // Check for DB connection
// conn.once('open', function(){
//     console.log("Connected to MongoDB successfully!");
// });
// conn.on('error', function(){
//     console.log(err);
// });

// // Route for home
// app.get('/', function (req, res) {
//     res.send('hello world')
// });
