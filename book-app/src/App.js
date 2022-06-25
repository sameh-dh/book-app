
import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './App.css';


function App() {    
  //to add new book
const [bookName,setBookName]=useState('')  
const [author,setAuthor]=useState('')   
const [description,setDescription]=useState('')   
 const [price,setPrice]=useState(0)   
 //to show all books
 const [books,setBooks]=useState([])

//connect to the database using axios  
//get all books from the data base
useEffect(()=>{
    Axios.get("http://localhost:3002/getBooks").then(res=>{
      console.log(res.data)
      setBooks(res.data)
    })
  })
  //add book to the database
const addNewBook= ()=>{
  Axios.post("http://localhost:3002/createBook",{bookName,author,description,price})  
  console.log("done")
}   

return ( 
  
//create input for the new book
<div className="container">     
<h1>PhoneBook List</h1>

        {books.map((val,key) => {
        return  <div key={key} className="phone" >
            <h1>{val.bookName}</h1>
            <h1>{val.author}</h1>
          </div>
        })}
      </div> )}
 {/*  <label  htmlFor="" >  Book Name: </label>      
 <input type="text" onChange={(e) => {setBookName(e.target.value)}}/><br/><br/>      
<label htmlFor="">Author: </label>          
<input type="text" onChange={(e) => {setAuthor(e.target.value)}}/><br/><br/>        
<label htmlFor="">Book Description </label>          
<input type="text" onChange={(e) => {setDescription(e.target.value)}}/><br/><br/>          
<label htmlFor="">Price </label>
<input type="number" onChange={(e) => {setPrice(e.target.value)}}/><br/><br/>         
 <button onClick={()=>addNewBook}>Add New Book</button> </div>    */ }
    
 export default App;