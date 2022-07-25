import React, {useState, useEffect} from "react";
import {FaPlus} from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs"
import {BiSearchAlt2} from "react-icons/bi";
import customaxios from "../api/customaxios";
import { useNavigate } from "react-router-dom";
import { HiViewList } from "react-icons/hi"
import { BsPencilFill } from "react-icons/bs";
import {AiOutlineClockCircle} from "react-icons/ai";
import {TiSortAlphabetically} from "react-icons/ti";
import '../style/typeformbar.css'
import { 
        Container,
        Row,
        Col, 
        Button,
        Form,
        Dropdown,
        DropdownButton, 
        Modal, 
        FormControl } from "react-bootstrap";
import Popup from "./popup";

const Typeformbar = (props) =>{

    const url = '/typeforms'
    const [show, setShow] = useState(false);
    const [show2 , setShow2] = useState(false);
    const [items,setItems]=useState([]);
    const [forms,setForms]=useState([]);
    let Navigate  = useNavigate();
    const [names, setNames] = useState('qwerty');
    console.log(names);
    
    // useEffect(()=>{
    //     let data = [];
    //     items.forEach((element, i) => {
    //         if(element.name.includes(names)){
    //             data.push(element);
    //         }
    //     });
    //     setForms(data);
    // },[names])
    console.log(forms);
    

    useEffect(()=>{
        customaxios.get(url).then(
            (res) => {
            const alldata = res.data;
             setItems(alldata);
            });
    },[])

    const grid = () =>{
        props.show('grid');
    }
    const list = () =>{
        props.show('list');
    }
   
   return ( 
    <Container fluid className="h-50 mt-5 border-bottom" style={{backgroundColor:"#FAFAFA"}} >
        <br/>
        <br/>
        <br/>
        <Row className="px-2">
            <Col className="p-0 mx-0" md='3' lg='3' xl='3' sm='4' xs='5' >
                <Button variant="dark" className="d-flex justify-content-center mx-0 " onClick={() => setShow(true)}>
                    <span className="d-flex align-items-center justify-content-between">
                        <FaPlus className='mx-2 '/>
                        <span className="txt" >Create Typeform</span>
                    </span>
                </Button>
            </Col>
            <Col className="p-0" lg='4' xl='4' md='6' sm='6' xs='7' >
                <span className="border rounded d-flex align-items-center mx-sm-1 w-xs-100 w-sm-50 w-md-50 w-lg-50" onClick={() => setShow2(true)}>
                    <BiSearchAlt2 color="#A0A0A0" className="mx-2 p-0 me-0"/>
                    <Form.Control type="text" className=" bg-light w-90 mx-auto h-xs-75" style = {{ border:"black", boxShadow: 'none'}} placeholder="Find Typeform" />
                </span>
            </Col>
            <Col className="d-md-flex d-sm-flex d-lg-flex d-none  justify-content-end" lg='2' xl='2' md='3' sm='2'>
                <DropdownButton className="rounded"  variant="grey-300" title="Date Created" style = {{ border:"black", boxShadow:"black",backgroundColor:"#E3E3E3",outline:"none"}}>
                    <Dropdown.Item >
                        <span className="d-flex align-items-center" >
                            <AiOutlineClockCircle color="#737373" className="p-0 me-2"/>
                            Date Created
                        </span>
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <span className="d-flex align-items-center">
                            <BsPencilFill color="#737373" className="p-0 me-2"/>
                            Last Updated
                        </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="mb-0">
                        <span className="d-flex align-items-center">
                            <TiSortAlphabetically color="#737373" className="p-0 me-2"/>
                            Alphabetical
                        </span>
                    </Dropdown.Item>
                </DropdownButton>
            </Col>
            <Col className="d-lg-flex d-sm-none d-none d-md-none justify-content-end" lg='3' xl='3'>
                <span>
                    <Button variant="none" style={props.list === 'grid' ?{backgroundColor:"#737373",color:"white"} : {backgroundColor:"#E3E3E3"}} onClick={grid}>
                        <span className="d-flex align-items-center">
                            <BsGrid3X3GapFill color= {props.list === 'grid' ? "white" : "black"} className="p-0 me-1"/>
                            Grid
                        </span>
                    </Button>
                    <Button variant="none" style={props.list === 'list' ?{backgroundColor:"#737373",color:"white"} : {backgroundColor:"#E3E3E3"}} onClick={list}>
                        <span className="d-flex align-items-center">
                            <HiViewList 
                            color= {props.list === 'list' ? "white" : "black"}
                            className="p-0 me-1"/>
                            List
                        </span>
                    </Button>
                </span>
            </Col>
        </Row>
        <br/>
        <Popup show={show} onHide={() => setShow(false)} />
        <Modal show={show2} onHide={() => setShow2(false)} >
            <Container>
                <Row>
                    <span className="border rounded d-flex align-items-center" onClick={() => setShow2(true)}>
                        <BiSearchAlt2 color="#A0A0A0" className="mx-1 p-0"/>
                        <FormControl type="text" id="name" className="w-90 mx-auto h-xs-75" style = {{ border:"black", boxShadow: 'none'}} placeholder="Find Typeform" autocomplete="off" onChange={(e)=> {setNames(e.target.value)}} />
                    </span>
                </Row>
                {items.map((element, i) => {
                    if(element.name.includes(names)){
                        return(
                            <Row key={i} className='w-75 m-0 ' onClick={()=>Navigate(`/homepage/${element.id}`)} >
                                <p className="shadow-sm rounded px-5 py-2 my-3 mx-3 frm">{element.name}</p>
                            </Row>
                        )   
                    }
                })}
            </Container>
        </Modal>
    </Container>
    );
}

export default Typeformbar;
