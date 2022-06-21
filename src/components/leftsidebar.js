import React from "react";
import { FaPlus } from "react-icons/fa";
import '../style/leftsidebar.css'


const LeftSideBar = () =>{
   return ( 
   <aside className="left-sidebar">
    <div className="content">
        <p >
            Content
        </p>
        <FaPlus className="plus"/>
    </div>
   </aside>
   );
}

export default LeftSideBar;