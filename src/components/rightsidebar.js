import React, { Fragment } from "react";
import { Row, Stack,} from "react-bootstrap";
import {AiTwotoneSetting} from "react-icons/ai"
import {CgTranscript} from "react-icons/cg"
import { GoCheck } from "react-icons/go";
import {IoIosQuote} from "react-icons/io"
import Select from 'react-select';
import { useNavigate, useParams } from "react-router-dom";
import '../style/rightsidebar.css'
import data from "../forms/forms";



const RightSideBar = (props) =>{
    let Navigate  = useNavigate();
    const param = useParams();
    const tid = param.id;
    // const { id, name} = data

    const formatOptionLabel = ({ id, name}) => {
        if(id==="1")
            return (
                <span className="d-flex" onClick={TextClick}>
                    <span className="rounded ps-1 pe-1  d-flex align-items-center me-2" style = {{backgroundColor:"#379CFB"}}>
                        <CgTranscript/>
                    </span>
                    {name}
                </span>
            )
        else if(id==="2")
            return (
                <span className="d-flex" onClick={McqClick}>
                    <span className="rounded ps-1 pe-1  d-flex align-items-center me-2" style = {{backgroundColor:"#D65C99"}}>
                        <GoCheck/>
                    </span>
                    {name}
                </span>
            )
        else if(id==="3")
            return (
                <span className="d-flex" onClick={StatementClick}>
                    <span className="rounded ps-1 pe-1  d-flex align-items-center me-2" style = {{backgroundColor:"#FBA137"}}>
                        <IoIosQuote/>
                    </span>
                    {name}
                </span>
            )
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
            <Stack direction="horizontal" gap={3} className='p-2 border-bottom d-flex justify-content-center' >
                <p className="setting mb-0 text-dark" onClick={()=>Navigate(`/homepage/${tid}`)} >
                    Question
                </p>
                {/* <p className="setting mb-0"  onClick={()=>Navigate(`/homepage/${tid}`)} >
                    Design
                </p>
                <p className="setting mb-0"  onClick={()=>Navigate(`/homepage/${tid}/flow`)} >
                    Logic
                </p> */}
                <AiTwotoneSetting  className="setting"  />
            </Stack>
            <Row className="p-4">
                Type
            </Row>
            <Row className="w-100 m-0">
                <Select defaultValue="Choose" formatOptionLabel={formatOptionLabel} options={data} className='w-100' />
            </Row>
            <Row className="border-top mt-5 px-0 font">
                Image or Video
                <input type="file" className="w-40 h-25 mx-4" />
            </Row>
        </>
    );
}

export default RightSideBar;
