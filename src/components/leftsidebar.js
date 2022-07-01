import React,{useState,useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import '../style/leftsidebar.css'
import axios from "axios";
import { useParams } from "react-router-dom";


const LeftSideBar = (props) =>{

    const param = useParams();
    const tid = param.id;
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([])

    const url = `http://localhost:3006/Questions`;

    useEffect(()=>{
        axios.get(url).then(
            (res) => {
            const alldata = res.data;
             setItems(alldata);
            });
    },[show])
    
    return ( 
        <div className="left-sidebar">
            <div className="content">
                <p >
                    Content
                </p>
                <FaPlus className="plus" onClick={() => props.changeState((s) => !s)} />
        
             </div>
            <div className="quesstored">
                {/* {items && items.Questions.map(item=> {
                        <div key={item.id} className="qtype">
                            name: {item.QuestionType}
                        </div>
                })}  */}
            </div>
        </div>
   );
}

export default LeftSideBar;