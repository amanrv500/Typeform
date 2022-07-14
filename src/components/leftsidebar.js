import React,{useState,useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import '../style/leftsidebar.css'
import { useParams } from "react-router-dom";
import {FaQuoteRight} from "react-icons/fa"
import { CgTranscript} from 'react-icons/cg'
import { AiOutlineCheck} from 'react-icons/ai'
import {IoIosQuote} from "react-icons/io"
import {GoCheck} from "react-icons/go"
import { Col, Row, Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import customaxios from "../api/customaxios";



const LeftSideBar = (props) =>{

    const param = useParams();
    const tid = param.id;

    const [items, setItems] = useState([])
    let newdata = []

    const url = `/Questions`;

    useEffect(()=>{
        customaxios.get(url).then(
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

    const TextClick = () => {
       props.changeState(1);
    };

    const McqClick = () => { 
         props.changeState(2);
    };
    const StatementClick = () => {
        props.changeState(3);
    };

   
    return ( 
        <>
            <Row className="d-flex align-items-center justify-content-between m-0 ps-1 pe-0 py-3">
                <Col lg='8'>
                    <span className="h6" style={{fontWeight: "500"}}>
                        Content
                    </span>
                </Col>
                <Col lg='4' className="d-flex justify-content-end">
                <Dropdown drop="end">
                    <DropdownToggle variant="none" className="dt">
                        <FaPlus className="plus" />
                    </DropdownToggle>
                    <Dropdown.Menu >
                        <Dropdown.Item onClick={TextClick}>
                            <span className="d-flex">
                                <span className="rounded px-1 d-flex align-items-center me-2" style = {{backgroundColor:"#379CFB"}}>
                                    <CgTranscript/>
                                </span>
                                Text
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={McqClick}>
                            <span className="d-flex">
                                <span className="rounded px-1 d-flex align-items-center me-2" style = {{backgroundColor:"#D65C99"}}>
                                    <GoCheck/>
                                </span>
                                Multiple Choice
                            </span>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={StatementClick}>
                            <span className="d-flex">
                                <span className="rounded px-1 d-flex align-items-center me-2" style = {{backgroundColor:"#FBA137"}}>
                                    <IoIosQuote/>
                                </span>
                                Statement
                            </span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>
            {newdata.map(item=> {
                    const { id, QuestionType,question,count } = item;
                        return(
                            <Row key={id} className='m-2 ms-1 ps-0 py-2'>
                                {(() =>{
                                    if(QuestionType==="Text")
                                        return (
                                            <span className="d-flex">
                                                <span className="rounded px-1 w-25 d-flex align-items-center me-2 justify-content-between" style = {{backgroundColor:"#379CFB"}}>
                                                    <CgTranscript/>
                                                    {count}
                                                </span>
                                                <span className="fs-sm" style={{fontSize:"12px"}}> 
                                                    {question}
                                                </span>
                                            </span>
                                        )
                                    else if(QuestionType==="MultipleChoice")
                                        return (
                                            <span className="d-flex">
                                                <span className="rounded px-1 w-25 d-flex align-items-center me-2 justify-content-between" style = {{backgroundColor:"#D65C99"}}>
                                                    <GoCheck/>
                                                    {count}
                                                </span>
                                                <span className="fs-sm" style={{fontSize:"12px"}}> 
                                                    {question}
                                                </span>
                                            </span>
                                        )
                                    else if(QuestionType==="Statement")
                                        return (
                                            <span className="d-flex">
                                                <span className="rounded px-1 w-25 d-flex align-items-center me-2 justify-content-between" style = {{backgroundColor:"#FBA137"}}>
                                                    <IoIosQuote/>
                                                    {count}
                                                </span>
                                                <span className="fs-sm" style={{fontSize:"12px"}}> 
                                                    {question}
                                                </span>
                                            </span>
                                        )
                                })()}
                            </Row>
                        )
            })}
         </>  
    );
}

export default LeftSideBar;
