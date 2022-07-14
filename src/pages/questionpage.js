import React,{useState} from 'react';
import Nav1 from "../components/nav1";
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

    const [questionShow, setQuestionShow] = useState(2);

    return (
        <Container fluid className='vw-100 vw-100 p-0'>
            <Row>
                <Nav1 />
            </Row>
            <Row className='m-0 mt-5' style={{height:"94vh", width:"100vw"}} >
                <Col className='border-end p-0 mx-0' lg='2'>
                    <LeftSideBar  changeState={state => setQuestionShow(state)}/> 
                </Col>
                <Col className=' mx-0 p-4 d-flex align-items-center justify-content-center bg-light' lg='8'>
                    {(() => {
                        if (questionShow === 1) {
                            return <Textquestion />
                        } 
                        else if (questionShow === 2) {
                            return <Questions />
                        } 
                        else if (questionShow === 3) {
                            return <Statementquestion />
                        }
                    })()}
                </Col>
                <Col className='border ' lg='2' >
                    <RightSideBar changeState={state => setQuestionShow(state)}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Questionpage;

