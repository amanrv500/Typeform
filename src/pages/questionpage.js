import React,{useState} from 'react';
import Nav1 from "../components/nav";
import RightSideBar from '../components/rightsidebar';
import LeftSideBar from '../components/leftsidebar';
import Questions from '../components/mcqquestions';
import '../style/questionpage.css'
import Textquestion from '../components/textquestion';
import Statementquestion from '../components/statementquestion';
import '../style/questiontype.css'
import{IoIosQuote} from 'react-icons/io'
import { CgTranscript} from 'react-icons/cg'
import{AiOutlineCheck} from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';

const Questionpage = () => {
    const [text, setText] = useState(false);
    const [mcq, setMcq] = useState(true);
    const [statement, setStatement] = useState(false);
    const [show, setShow] = useState(false);

   

    return (
        <div >
            <Nav1 />
            <Container fluid className='mx-0 p-0'>
                <Row className='h-100'>
                    <Col className='border p-0 m-0' lg='2'>
                        <LeftSideBar changeStateMcq={mcq => setMcq(mcq)} changeStatText={text => setText(text)} changeStateStatment={statement => setStatement(statement)}/> 
                    </Col>
                    <Col className='border' lg='8'>
                        <div style={{ display: mcq ? "flex" : "none" }}>
                            <Questions />
                        </div>
                        <div style={{ display: text ? "flex" : "none" } }>
                            <Textquestion />
                        </div>
                        <div style={{ display: statement ? "flex" : "none" }}>
                            <Statementquestion />  
                        </div> 
                    </Col>
                    <Col className='border ' lg='2' >
                        <RightSideBar changeStateMcq={mcq => setMcq(mcq)} changeStatText={text => setText(text)} changeStateStatment={statement => setStatement(statement)}/>
                    </Col>
                </Row>
            </Container>

            {/* <div className="contents"> 
                <LeftSideBar changeState={show => setShow(show)}/>

                    <div style={{ display: mcq ? "flex" : "none" }}>
                        <Questions />
                    </div>
                    <div style={{ display: text ? "flex" : "none" } }>
                        <Textquestion />
                    </div>
                    <div style={{ display: statement ? "flex" : "none" }}>
                        <Statementquestion />  
                    </div> 
                    
                        <RightSideBar />    
                    </div>
            <div className='questype' style={{ visibility: show ? "visible" : "hidden" }}>
                <h3>
                    Question Type
                </h3>
                <div className='qicons' onClick={(e) => TextClick(e)}>
                    <CgTranscript className='ticon' />
                    Text
                 </div>
                <span className='qicons' onClick={(e) => McqClick(e)}>
                    <AiOutlineCheck className='micon'/> Multiple Choice
                </span>
                <span className='qicons' onClick={(e) => StatementClick(e)}>
                    <IoIosQuote className='sticon' />Statement
                </span>
            </div> */}
        </div>
    );
}

export default Questionpage;

