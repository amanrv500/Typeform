import React,{useState} from 'react';
import Nav1 from "../components/nav1";
import RightSideBar from '../components/rightsidebar';
import LeftSideBar from '../components/leftsidebar';
import McqQuestions from '../formtypes/mcqquestions';
import '../style/questionpage.css'
import TextQuestion from '../formtypes/textquestion';
import StatementQuestion from '../formtypes/statementquestion';
import { Col, Container, Row } from 'react-bootstrap';

const Questionpage = () => {

    const [questionShow, setQuestionShow] = useState(2);
    const [refresh, setRefresh] = useState(0);
    

    return (
        <Container fluid className='vw-100 vw-100 p-0'>
            <Row>
                <Nav1 />
            </Row>
            <Row className='m-0 mt-5' style={{height:"94vh", width:"100vw"}} >
                <Col className='border-end p-0 mx-0' lg='2' >
                    <LeftSideBar  changeState={state => setQuestionShow(state)} refresh={refresh} /> 
                </Col>
                <Col className=' mx-0 p-4 d-flex align-items-center justify-content-center bg-light' lg='8'>
                    {(() => {
                        if (questionShow === 1) {
                            return <TextQuestion refresh={refresh => setRefresh(refresh)} />
                        } 
                        else if (questionShow === 2) {
                            return <McqQuestions refresh={refresh => setRefresh(refresh)} />
                        } 
                        else if (questionShow === 3) {
                            return <StatementQuestion refresh={refresh => setRefresh(refresh)} />
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

