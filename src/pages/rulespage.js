import Navbar1 from "../components/Navbar";
import Flow from "../renderer/flow";
import React from 'react';
import Leftrules from "../components/leftrules";
import { Col, Container, Row } from "react-bootstrap";
import Nav2 from "../components/nav2";


const Rules = () => {
    return (
        <Container>
            <Row>
                <Nav2 />
            </Row>
            <Row>
                <Col lg='2'>
                    <Leftrules />
                </Col>
                <Col lg='10'>
                    <Flow />
                </Col>
            </Row>
        </Container>
        // <div className="rulepage">
        //     <Navbar1 />
        //     <Leftrules />
        //     <article className="flow">
        //         <Flow />
        //     </article>
          
        // </div>
    );
}

export default Rules;
