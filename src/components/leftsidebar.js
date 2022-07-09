import React,{useState,useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import '../style/leftsidebar.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import {FaQuoteRight} from "react-icons/fa"
import { CgTranscript} from 'react-icons/cg'
import { AiOutlineCheck} from 'react-icons/ai'
import {IoIosQuote} from "react-icons/io"
import {FaCheck} from "react-icons/fa"
import { Col, Row, DropdownButton, ButtonGroup, Dropdown,Button } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";



const LeftSideBar = (props) =>{

    const param = useParams();
    const tid = param.id;
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([])
    let newdata = []

    const url = `http://localhost:3006/Questions`;

    useEffect(()=>{
        axios.get(url).then(
            (res) => {
            const alldata = res.data;
             setItems(alldata);
            });
        
    },[])

    for(let i=0;i<items.length;i++){
        if(items[i].formID==tid){
            newdata.push(items[i])
        }
    };

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
        <>
            <Row className="d-flex align-items-center justify-content-between m-0 ps-3 pe-0 py-3">
                <Col lg='8'>
                    Content
                </Col>
                <Col lg='4' className="d-flex justify-content-end">
                <Dropdown drop="end">
                    <DropdownToggle variant="none">
                        <FaPlus className="plus" onClick={() => props.changeState((s) => !s)}/>
                    </DropdownToggle>
                    <Dropdown.Menu >
                        <Dropdown.Item onClick={TextClick}><CgTranscript className='ticon' />Text</Dropdown.Item>
                        <Dropdown.Item onClick={McqClick}> <AiOutlineCheck className='micon'/> Multiple Choice</Dropdown.Item>
                        <Dropdown.Item onClick={StatementClick}> <IoIosQuote className='sticon' />Statement</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>
            <Row className="m-0 p-0 d-flex justify-content-start">
                {newdata.map(item=> 
                    {
                        const { id, QuestionType,question } = item;
                        return(
                            <div key={id} className="qtype">
                                {(() =>{
                                    if(QuestionType=="Text")
                                        return (
                                            <span className="qico"><CgTranscript className="ticon"/>{question}</span>
                                        )
                                    else if(QuestionType=="MultipleChoice")
                                        return (
                                            <span className="qico"><FaCheck className="micon"/>{question}</span>
                                        )
                                    else if(QuestionType=="Statement")
                                        return (
                                        <span className="qico"><FaQuoteRight className="sticon"/>{question}</span>
                                        )
                                })()}
                            </div>
                        )
                    }
                )
                }
            </Row>
         </>  
   );
}

export default LeftSideBar;
