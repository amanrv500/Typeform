import RightSideBar from "../components/rightsidebar";
import Flow from "../renderer/flow";
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Nav2 from "../components/nav2";


const Flowpage = () => {
    return (
        <Container fluid className="p-0 vw-100 vh-100" >
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
    );
}

export default Flowpage;

