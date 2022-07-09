import React from "react";
import { Container, Row, Col, Stack, FormControl } from "react-bootstrap";
import {AiTwotoneSetting} from "react-icons/ai"
import {CgTranscript} from "react-icons/cg"
import {AiOutlineCheck} from "react-icons/ai"
import {IoIosQuote} from "react-icons/io"

import { useNavigate, useParams } from "react-router-dom";
import '../style/rightsidebar.css'
import { Dropdown,} from 'react-bootstrap'


const RightSideBar = (props) =>{
  let Navigate  = useNavigate();
  const param = useParams();
  const tid = param.id;

  const TextClick = (e) => {
    props.changeStatText(true);
    props.changeStateMcq(false);
    props.changeStateStatment(false);
    
};
const McqClick = (e) => { 
    props.changeStatText(false);
    props.changeStateMcq(true);
    props.changeStateStatment(false);
};
const StatementClick = (e) => {
    props.changeStatText(false);
    props.changeStateMcq(false);
    props.changeStateStatment(true);
};
  
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
      <Row className="p-4">
        Type
      </Row>
      <Row className="w-75">
       <Dropdown>
        <Dropdown.Toggle variant="none" id="dropdown-basic">
           Choose Type
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item onClick={TextClick}><CgTranscript className='ticon' />Text</Dropdown.Item>
        <Dropdown.Item onClick={McqClick}> <AiOutlineCheck className='micon'/> Multiple Choice</Dropdown.Item>
        <Dropdown.Item onClick={StatementClick}> <IoIosQuote className='sticon' />Statement</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
      </Row>
    

    <Row className="border-top mt-5 px-0 font">
        Image or Video <input type="file" className="w-40 h-25 mx-4" />
    </Row>

      
    </div>
   );
}

export default RightSideBar;
