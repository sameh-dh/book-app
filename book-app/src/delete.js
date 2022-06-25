import  Axios  from "axios";
import React ,{ useState ,useEffect}from "react"; 


function Delete(){
    const [bookss,setBooks]=useState([])
// connect to the database using axios   
//  get all books from the data base 
 useEffect(()=>{
    Axios.get("http://localhost:3002/getBooks").then(res=>{
      
      setBooks(res.data)
 })})
    const deleteBook=(id)=>{
        Axios.delete(`http://localhost:3002/deleteBook/${id}`)
    }
   
    return (<div className="container">
<h1>Book List</h1>
{bookss.map((val,key) => {
            return  <div key={key} className="book" >
            <h1><span>Book name: </span>{val.bookName}</h1>
                <h1><span>Author:</span> {val.author}</h1>
                <h1><span>Description:</span> {val.description}</h1>
                <h1><span>Price: </span> {val.price}</h1>
              
    <button  className='delete-btn'onClick={() =>{console.log(val._id) 
        return deleteBook(val._id)}}>Delete</button>
    </div>
  })
}

    </div>)
}
export default Delete;