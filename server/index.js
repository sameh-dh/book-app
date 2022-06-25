const express = require("express");
const app = express();
const BookModel=require("./books")
const mongoose = require("mongoose");
const  bodyParser = require('body-parser')

const cors = require("cors");
//connect to mongo alts database
mongoose.connect(
  "mongodb+srv://samehdh:samehdh123@cluster0.8cq1msh.mongodb.net/book?retryWrites=true&w=majority", { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('There is problem while connecting database ' + err) }
    
);
mongoose.Promise = global.Promise;
app.use(express.json());
app.use(cors());
//convert data to json format
app.use(bodyParser.json());
//home page
app.get('/', function (req, res) {
    res.send("Book app")
});

// get all books page
app.get("/getBooks",   (req, res) => {
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

//delete book and call it by id
app.delete("/deleteBook/:id", async(req,res)=>{
  const id =req.params.id
  await BookModel.findByIdAndDelete(id,).exec();
  res.send('item deleted')
}
)


app.listen(3002, () => {
  console.log("SERVER RUNS PERFECTLY!");
});







