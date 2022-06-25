import React  from "react";
import { useState} from "react";
import Axios from "axios";
import Add from "./add";
import Show from "./showBooks";
import Delete from "./delete";
function HomePage(props){
    //counter for pages
    const [page,setPage]=useState(0);
    //array of page titles
    const pageTitles=["Show Books","Add Book","Delete"]
    const PageDisplay=()=>{
        if (page===0){
          
            return <Show  />
            
        }else if (page===1){
            return <Add />
        }else if (page===2){
            return <Delete  />
        }
    }
    return(
<div className="home">
    <nav><button onClick={() => {
     
              setPage((currPage) =>currPage=0);
            }}>Show All Books</button>
<button onClick={() => {
              setPage((currPage) =>currPage=1);
            }}>Add new Book</button>
 <button onClick={() => {
              setPage((currPage) =>currPage=2);
            }}>Delete Book</button>
            </nav>
<div className="container">
    
<div className="header">
    <h1>{pageTitles[page]}</h1>
</div>
<div className="body">{PageDisplay()}
<div className="footer">

</div>
</div>
</div>
</div>
    )
}
export default HomePage;