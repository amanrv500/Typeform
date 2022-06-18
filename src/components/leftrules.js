import React from "react";
import { FaThList } from "react-icons/fa";

const Leftrules = () =>{
    return ( 
    <aside className="left-sidebar">
     <h4>Add Logic</h4>
     <div className="if">
        <h5>If</h5>
        <input type='text' placeholder="choose"></input>
        <input type='text' placeholder="source"></input>
     </div>
    </aside>
    );
 }
 
 export default Leftrules;