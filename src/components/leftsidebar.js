import React,{useState,useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import '../style/leftsidebar.css'
import { useParams } from "react-router-dom";
import { CgTranscript} from 'react-icons/cg'
import {IoIosQuote} from "react-icons/io"
import {GoCheck} from "react-icons/go"
import { Col, Row, Dropdown } from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import customaxios from "../api/customaxios";
import {BsThreeDotsVertical} from "react-icons/bs";
import {RiDeleteBin5Line} from "react-icons/ri";



const LeftSideBar = (props) =>{

    const param = useParams();
    const tid = param.id;
    const [refr, setRefr] = useState(0);

    const [items, setItems] = useState([])
    let newdata = []

    useEffect(()=>{
        const url = `/Questions`;
        customaxios.get(url).then(
            (res) => {
            const alldata = res.data;
                setItems(alldata);
            });
    },[props.refresh,refr])

    console.log(props.refresh)


    for(let i=0;i<items.length;i++){
        if(items[i].formID===tid){
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

    const deleteQuestion = (idd) => {
        const url = `/Questions/${idd}`;
        customaxios.delete(url).then(
            (res) => {
                console.log(res);
            }
        );
        setRefr(refr+1);
    }


   
    return ( 
        <>
            <Row className="d-flex align-items-center justify-content-between m-0 ps-1 pe-0 py-3" >
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
                    <Dropdown.Menu className="shadow-sm">
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
            <div style={{maxHeight: 'calc(100vh - 130px)', overflowY: 'auto' }}>
            {newdata.map(item=> {
                    const { id, QuestionType,question,count } = item;
                        return(
                            <Row key={id} className='me-1 ms-1 ps-0 py-2 ques'>
                                {(() =>{
                                    if(QuestionType==="Text")
                                        return (
                                            <span className="d-flex">
                                                <Col lg='4' className="rounded my-1 px-1 w-25 d-flex align-items-center me-2 justify-content-between" style = {{backgroundColor:"#379CFB"}}>
                                                    <CgTranscript/>
                                                    {count}
                                                </Col>
                                                <Col lg='7' className="d-flex align-items-center" style={{fontSize:"12px"}}> 
                                                    {question}
                                                </Col>
                                                <Col lg='1' className="three-dots">
                                                    <Dropdown drop="bottom" >
                                                        <DropdownToggle variant="none" className="dt">
                                                            <BsThreeDotsVertical />
                                                        </DropdownToggle>
                                                        <Dropdown.Menu style={{zIndex:'4'}} className="shadow-sm drpmenu">
                                                            <Dropdown.Item >
                                                                <span className="d-flex align-items-center" onClick={() => deleteQuestion(id)} >
                                                                    <RiDeleteBin5Line className="me-2"/>
                                                                    Delete
                                                                </span>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Col>
                                            </span>
                                        )
                                    else if(QuestionType==="MultipleChoice")
                                        return (
                                            <span className="d-flex">
                                                <Col lg='4' className="rounded my-1 px-1 w-25 d-flex align-items-center me-2 justify-content-between" style = {{backgroundColor:"#D65C99"}}>
                                                    <GoCheck/>
                                                    {count}
                                                </Col>
                                                <Col lg='7' className="d-flex align-items-center" style={{fontSize:"12px"}}> 
                                                    {question}
                                                </Col>
                                                <Col lg='1' className="three-dots">
                                                    <Dropdown drop="bottom" >
                                                        <DropdownToggle variant="none" className="dt">
                                                            <BsThreeDotsVertical />
                                                        </DropdownToggle>
                                                        <Dropdown.Menu style={{zIndex:'4'}} className="shadow-sm drpmenu">
                                                            <Dropdown.Item >
                                                                <span className="d-flex align-items-center" onClick={() => deleteQuestion(id)} >
                                                                    <RiDeleteBin5Line className="me-2"/>
                                                                    Delete
                                                                </span>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Col>
                                            </span>
                                        )
                                    else if(QuestionType==="Statement")
                                        return (
                                            <span className="d-flex">
                                                <Col lg='4' className="rounded my-1 px-1 w-25 d-flex align-items-center me-2 justify-content-between" style = {{backgroundColor:"#FBA137"}}>
                                                    <IoIosQuote/>
                                                    {count}
                                                </Col>
                                                <Col lg='7' className="d-flex align-items-center" style={{fontSize:"12px"}}> 
                                                    {question}
                                                </Col>
                                                <Col lg='1' className="three-dots">
                                                    <Dropdown drop="bottom" >
                                                        <DropdownToggle variant="none" className="dt">
                                                            <BsThreeDotsVertical />
                                                        </DropdownToggle>
                                                        <Dropdown.Menu style={{zIndex:'4'}} className="shadow-sm drpmenu">
                                                            <Dropdown.Item >
                                                                <span className="d-flex align-items-center" onClick={() => deleteQuestion(id)} >
                                                                    <RiDeleteBin5Line className="me-2"/>
                                                                    Delete
                                                                </span>
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Col>
                                            </span>
                                        )
                                })()}
                            </Row>
                        )
            })}
            </div>
         </>  
    );
}

export default LeftSideBar;
