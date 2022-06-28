import axios from "axios";
import React, {useEffect, useState} from "react";
import '../style/navbar.css'
import {useParams} from "react-router-dom";


const Nav = () =>{

    const param = useParams();
    const tid = param.id;
    const [items,setItems]=useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3006/typeforms/${tid}`).then(
            (res) => {
            const alldata = res.data;
             setItems(alldata);
            });      
    },[])

   return ( 
   <nav className="navbar">
    <div className="workspace">
        <p>{`My workspace  / ${items.name}`}</p>   
    </div>
    <div className="middle">
        <p className="create highlight">
            Create
        </p>
        <p className="create">
            Connect
        </p>
        <p className="create">
            Share
        </p>
        <p className="create">
            Result
        </p>
    </div>
      <img src={require('../assets/ar.jpg')} className="ar" alt="ar"/>
   </nav>
   );
}

export default Nav;
