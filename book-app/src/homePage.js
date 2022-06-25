import React  from "react";
import { useState} from "react";
import Axios from "axios";
import Add from "./add";
import Show from "./showBooks";

function HomePage(){
    //counter for pages
    const [page,setPage]=useState(0);
    //array of page titles
    const pageTitles=["Show Books","Add Book"]
    const PageDisplay=()=>{
        if (page===0){
            return <Show />
        }else if (page===1){
            return <Add />
        }
    }
    return(
<div className="home">
    <nav><button onClick={() => {
              setPage((currPage) =>currPage=0);
            }}>Show All Books</button>
<button onClick={() => {
              setPage((currPage) =>currPage=1);
            }}>Add new Book</button></nav>
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