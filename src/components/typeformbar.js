import React from "react";
import {FaPlus} from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs"
import { HiViewList } from "react-icons/hi"

const Typeformbar = () =>{
   return ( 
   <div className="typeformbar">
         <button className='create-typeform' >
         <FaPlus id="plus-sign"/>
             <h6 id="create-text">Create typeform</h6>
        </button>
        <span className="find">
            <i className="fa fa-search icon sicon"></i>
        <input className="search" placeholder="Find work place or typeform"/>
        </span>    

        <span>
        <select className="date">
           <option>
            Date created
           </option>
           <option>
            Last updated
           </option>
           <option>
            alphabetical
           </option>
        </select>
        </span>
        <button className="grid">
            <BsGrid3X3GapFill id="grid-icon"/>
            Grid
        </button>

        <button className="list">
            <HiViewList id="list-icon"/>
         List
        </button>
   </div>
   );
}

export default Typeformbar;
