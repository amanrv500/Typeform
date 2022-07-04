import React,{useState,useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import '../style/leftsidebar.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import {FaQuoteRight} from "react-icons/fa"
import { CgTranscript} from 'react-icons/cg'
import{FaCheck} from 'react-icons/fa'



const LeftSideBar = (props) =>{

    const param = useParams();
    const tid = param.id;
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([])
    let newdata = []

    const url = `http://localhost:3006/Questions`;

    useEffect(()=>{
        axios.get(url).then(
            (res) => {
            const alldata = res.data;
             setItems(alldata);
            });
        
    },[])

    for(let i=0;i<items.length;i++){
        if(items[i].formID==tid){
            newdata.push(items[i])
        }
    };

    newdata.map(item => {
        console.log(item.id)
    })
    console.log('hey')
    return ( 
        <div className="left-sidebar">
            <div className="content">
                <p >
                    Content
                </p>
                <FaPlus className="plus" onClick={() => props.changeState((s) => !s)} />
            </div>
            <div className="quesstored">
                {newdata.map(item=> 
                {
                    const { id, QuestionType,question } = item;
                    return(
                    <div key={id} className="qtype">
                        {(() =>{
                            if(QuestionType=="Text")
                            return (
                                <span className="qico"><CgTranscript className="ticon"/>{question}</span>
                            )
                            else if(QuestionType=="MultipleChoice")
                            return (
                                <span className="qico"><FaCheck className="micon"/>{question}</span>
                            )
                            else if(QuestionType=="Statement")
                            return (
                                <span className="qico"><FaQuoteRight className="sticon"/>{question}</span>
                            )
                        })()}
                    </div>
                    )
                }
                )
                }
            </div>
        </div>
   );
}

export default LeftSideBar;