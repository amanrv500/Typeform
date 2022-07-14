import Navbar from "../components/Navbar";
import RightSideBar from "../components/rightsidebar";
import Flow from "../renderer/flow";
import React from 'react';
import '../style/flowpage.css';
import { Container, Row, Col } from "react-bootstrap";
import Navbar1 from "../components/Navbar";
import Nav2 from "../components/nav2";


const Flowpage = () => {
    return (
        <Container fluid >
            <Row >
                <Nav2 />
            </Row>
            <Row className="vh-100">
                <Col lg='10' className="border" >
                    <Flow />
                </Col>
                <Col lg='2' className="border">
                    <RightSideBar />
                </Col>
            </Row>
        </Container>
        // <div className="flowpage">
        //     <Navbar />
        //     <div className="contents">
        //         <div className="flow">
        //             <Flow />
        //         </div>
        //         <RightSideBar />
        //     </div>
        // </div>
    );
}

export default Flowpage;

