import React from "react";

import { useState ,useEffect} from "react";
import Axios from "axios";
function Show (){
    
//  to show all books 
const [books,setBooks]=useState([])
// connect to the database using axios   
//  get all books from the data base 
 useEffect(()=>{
    Axios.get("http://localhost:3002/getBooks").then(res=>{
      
      setBooks(res.data)
    })
  })
  return ( 
  
    //create input for the new book
    <div className="container">     
    <h1>Book List</h1>
    
            {books.map((val,key) => {
            return  <div key={key} className="book" >
                <h1>{val.bookName}</h1>
                <h1>{val.author}</h1>
              </div>
            })}
          </div> )
}
export default Show;