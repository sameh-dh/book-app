import React ,{useState}from "react";
import Axios from "axios";
function Add(){
    //to add new book
const [bookName,setBookName]=useState('')  
const [author,setAuthor]=useState('')   
const [description,setDescription]=useState('')   
 const [price,setPrice]=useState(0)   
 


  //add book to the database
const addNewBook= ()=>{
  Axios.post("http://localhost:3002/createBook",{bookName,author,description,price})  
  console.log("done")
}   

return ( 
  
//create input for the new book
<div className="container">     

 <label  htmlFor="" >  Book Name: </label>      
 <input type="text" onChange={(e) => {setBookName(e.target.value)}}/><br/><br/>      
<label htmlFor="">Author: </label>          
<input type="text" onChange={(e) => {setAuthor(e.target.value)}}/><br/><br/>        
<label htmlFor="">Book Description </label>          
<input type="text" onChange={(e) => {setDescription(e.target.value)}}/><br/><br/>          
<label htmlFor="">Price </label>
<input className="price" type="number" onChange={(e) => {setPrice(e.target.value)}}/><br/><br/>         
 <button className="btn-add" onClick={()=>addNewBook()}>Add New Book</button>
  </div>    
)}

export default Add