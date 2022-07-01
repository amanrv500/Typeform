import React, { useEffect,useState,useRef } from "react";
import api from '../api/typef'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {AiFillEdit} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai";
import '../style/typeforms.css'
import Editpopup from "./editpopup";





const Typeform = () => {

    let Navigate  = useNavigate();
    const url = `http://localhost:3006/typeforms`

    const [items,setItems]=useState([]);

    const [typeid,setTypeid]=useState();

    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };
    useEffect(()=>{
        axios.get(url).then(
            (res) => {
            const alldata = res.data;
             setItems(alldata);
            });
    },[typeid])  

    return ( 
        <div className="typeform">
            { items && items.map(item=> {
                const { id, name } = item;
                return(
                    <div key={id} className="grid1"  >
                    <div className="uper" onClick={()=>Navigate(`/homepage/${id}`)}>
                        <p className="type-text">
                           {name}
                        </p>
                    </div>
                    <div className='lower'>
                        <span onClick={()=>{setTypeid(id);setVisibility(!visibility)}}>
                           <AiFillEdit className='eddl'/>
                        </span> 
                        <span onClick={() => axios.delete(`http://localhost:3006/typeforms/${id}`)} >
                            <AiFillDelete className="eddl"/>
                        </span>
                    </div>
                    </div>
                )
            })}
             <Editpopup onClose={popupCloseHandler} show={visibility} newid={typeid} />
         </div>
    )
    
}

export default Typeform;





 


