import React from "react";
import {FaPlus} from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs"
import {BiSearchAlt2} from "react-icons/bi";
import { HiViewList } from "react-icons/hi"
import { BsPencilFill } from "react-icons/bs";
import {AiOutlineClockCircle} from "react-icons/ai";
import {TiSortAlphabetically} from "react-icons/ti";
import '../style/typeformbar.css';
import { Container,Row,Col, Button,Form,Dropdown,DropdownButton } from "react-bootstrap";

const Typeformbar = ({onclickaction}) =>{
   
   return ( 
    <Container fluid className="h-50 mt-25 border-bottom bg-light" >
        <br/>
        <br/>
        <br/>
        <Row className="px-2">
            <Col className="p-0 mx-0" md='3' lg='3' xl='3' sm='4' xs='7' >
                <Button variant="dark" className=" d-flex justify-content-center mx-0" onClick={() => onclickaction()}>
                    <span className="d-flex align-items-center justify-content-between fs-xs-6 fs-sm-6">
                        <FaPlus className='mx-2 '/>
                        Create Typeform
                    </span>
                </Button>
            </Col>
            <Col className="p-0 " lg='4' xl='4' md='6' sm='6' xs='5'>
                <span className="border rounded d-flex align-items-center w-75 ">
                    <BiSearchAlt2 color="#A0A0A0" className="mx-2 p-0 me-0"/>
                    <Form.Control type="text" className=" bg-light w-90 mx-auto" style = {{ border:"black", boxShadow: 'none'}} placeholder="Find workplace or typeform" />
                </span>
            </Col>
            <Col className="d-md-flex d-sm-flex d-none justify-content-end" lg='2' xl='2' md='3' sm='2'>
                <DropdownButton className="w-40"  variant="grey-100" title="Date Created" style = {{ border:"black", boxShadow:"black",backgroundColor:"#E3E3E3",outline:"none"}}>
                    <Dropdown.Item >
                        <span className="d-flex align-items-center">
                            <AiOutlineClockCircle color="#737373" className="p-0 me-1"/>
                            Date Created
                        </span>
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <span className="d-flex align-items-center">
                            <BsPencilFill color="#737373" className="p-0 me-1"/>
                            Last Updated
                        </span>
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <span className="d-flex align-items-center">
                            <TiSortAlphabetically color="#737373" className="p-0 me-1"/>
                            Alphabetical
                        </span>
                    </Dropdown.Item>
                </DropdownButton>
            </Col>
            <Col className="d-lg-flex d-sm-none d-none d-md-none justify-content-end" lg='3' xl='3'>
                <span>
                    <Button variant="secondary">
                        <span className="d-flex align-items-center">
                            <BsGrid3X3GapFill color="white" className="p-0 me-1"/>
                            Grid
                        </span>
                    </Button>
                    <Button variant="none" style = {{ border:"black", boxShadow:"black",backgroundColor:"#E3E3E3",outline:"none"}}>
                        <span className="d-flex align-items-center">
                            <HiViewList  className="p-0 me-1"/>
                            List
                        </span>
                    </Button>
                </span>
            </Col>
        </Row>
        <br/>
    </Container>
   );
}

export default Typeformbar;
