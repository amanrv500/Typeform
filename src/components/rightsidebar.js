import React from "react";
import {AiTwotoneSetting} from "react-icons/ai"
import { useNavigate, useParams } from "react-router-dom";
import '../style/rightsidebar.css'

const RightSideBar = () =>{
  let Navigate  = useNavigate();
  const param = useParams();
  const tid = param.id;
  
   return ( 
   <div className="right-sidebar">
    <div className="setting">
      <h3 onClick={()=>Navigate(`/homepage/${tid}`)}>Question</h3>
      <h3 onClick={()=>Navigate(`/homepage/${tid}`)}>Design</h3>
      <h3 onClick={()=>Navigate(`/homepage/${tid}/flow`)}>Logic</h3>
      <AiTwotoneSetting className="icon"/>
    </div>
   </div>
   );
}

export default RightSideBar;
