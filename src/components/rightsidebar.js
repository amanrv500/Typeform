import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import {AiTwotoneSetting} from "react-icons/ai"
import { useNavigate, useParams } from "react-router-dom";
import '../style/rightsidebar.css'

const RightSideBar = () =>{
  let Navigate  = useNavigate();
  const param = useParams();
  const tid = param.id;
  
   return ( 
    <div>
      <Stack direction="horizontal" gap={3} className='p-2 border-bottom d-flex justify-content-center' >
        <p className="setting mb-0 " onClick={()=>Navigate(`/homepage/${tid}`)} >
            Question
        </p>
        <p className="setting mb-0"  onClick={()=>Navigate(`/homepage/${tid}`)} >
            Design
        </p>
        <p className="setting mb-0"  onClick={()=>Navigate(`/homepage/${tid}/flow`)} >
            Logic
        </p>
        <AiTwotoneSetting  className="setting"  />
      </Stack>
    </div>
   );
}

export default RightSideBar;
