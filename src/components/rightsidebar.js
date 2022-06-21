import React from "react";
import {AiTwotoneSetting} from "react-icons/ai"
import '../style/rightsidebar.css'


const RightSideBar = () =>{
   return ( 
   <aside className="right-sidebar">
    <div className="setting">
      <h3>Question</h3>
      <h3>Design</h3>
      <h3>Logic</h3>
      <AiTwotoneSetting className="icon"/>
    </div>
   </aside>
   );
}

export default RightSideBar;