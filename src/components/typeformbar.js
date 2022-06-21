import React from "react";
import {FaPlus} from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs"
import {BiSearchAlt2} from "react-icons/bi";
import { HiViewList } from "react-icons/hi"
import { useNavigate } from "react-router-dom";
import Popup from "./popup";
import '../style/typeformbar.css';

const Typeformbar = ({onclickaction}) =>{
   
   return ( 
   <div className="typeformbar">
         <button className='create-typeform' onClick={() => onclickaction()} >
            <FaPlus id="plus-sign" size={0.1}/>
            <h6 id="create-text">Create typeform</h6>
        </button>
        <span className="find">
            <BiSearchAlt2 className="sicon" size={20}/>
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
