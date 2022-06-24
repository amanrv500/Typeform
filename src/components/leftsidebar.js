import React,{useState,useEffect,useRef} from "react";
import { FaPlus } from "react-icons/fa";
import '../style/leftsidebar.css'
import Questiontype from "./questiontype";
import axios from "axios";
import { useParams } from "react-router-dom";


const LeftSideBar = (props) =>{

    const param = useParams();
    const tid = param.id;
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([])

    const url = `http://localhost:3006/typeforms/${tid}/questions`

    useEffect(()=>{
        axios.get(url).then(
            (res) => {
            const alldata = res.data;
             setItems(alldata);
            });
    })
    
    return ( 
        <div className="left-sidebar">
            <div className="content">
                <p >
                    Content
                </p>
                <FaPlus className="plus" onClick={() => setShow((s) => !s)} />
        
             </div>
            <div className="quesstored">
                {/* {items && items.questions.map(item=> {
                    const { question} = item;
                    return(
                        <div className="qtype">
                            name: {item.question}
                        </div>
                    )
                })}  */}

            </div>
            <div style={{ visibility: show ? "visible" : "hidden" }}>
                <Questiontype />
            </div>
        </div>
   );
}

export default LeftSideBar;