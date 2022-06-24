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

const Questionpage = () => {
    const [text, setText] = useState(false);
    const [mcq, setMcq] = useState(true);
    const [statement, setStatement] = useState(false);

     

    return (
        <div className="questionpage">
            <Nav />
            <div className="contents"> 
                <LeftSideBar />
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
            <div className='questype'>
                <h3>
                    Question Type
                </h3>
                <div className='qicons' onClick={() => setText((sa) => !sa)}>
                    <CgTranscript className='ticon' />
                    Text
                 </div>
                <span className='qicons' onClick={() => setMcq((sb) => !sb)}>
                    <AiOutlineCheck className='micon'/> Multiple Choice
                </span>
                <span className='qicons' onClick={() => setStatement((sc) => !sc)}>
                    <IoIosQuote className='sticon' /> Statement
                </span>
            </div>
        </div>
    );
}

export default Questionpage;