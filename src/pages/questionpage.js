import React,{useState} from 'react';
import Nav from "../components/nav";
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

const Questionpage = () => {
    const [text, setText] = useState(false);
    const [mcq, setMcq] = useState(true);
    const [statement, setStatement] = useState(false);
    const [show, setShow] = useState(false);

    const TextClick = (e) => {
        setText(true)
        setMcq(false)
        setStatement(false)
    };
    const McqClick = (e) => { 
        setText(false)
        setMcq(true)
        setStatement(false)
    };
    const StatementClick = (e) => {
        setText(false)
        setMcq(false)
        setStatement(true)
    };

    return (
        <div className="questionpage">
            <Nav />
            <div className="contents"> 
                <LeftSideBar changeState={show => setShow(show)}/>

                    {/* <div className='middlesection'>

                        <div>
                        <FaPlus className="plus"  onClick={() => setShow((s) => !s)} />
                        </div>

                    </div> */}
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
            </div>
        </div>
    );
}

export default Questionpage;