import React  from "react";
import { useState} from "react";
import Axios from "axios";
import Add from "./add";
import Show from "./showBooks";
import Delete from "./delete";
function HomePage(){
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
    <ul><li><button className="btn" onClick={() => {
     
              setPage((currPage) =>currPage=0);
            }}>Show All Books</button></li>
<li><button className="btn" onClick={() => {
              setPage((currPage) =>currPage=1);
            }}>Add new Book</button></li>
 <li><button className="btn" onClick={() => {
              setPage((currPage) =>currPage=2);
            }}>Delete Book </button></li>
            
            </ul>
<div className="container">
    
<div className="body">{PageDisplay()}
<div className="footer">

</div>
</div>
</div>
</div>
    )
}
export default HomePage;