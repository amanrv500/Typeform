import React, {useEffect, useState} from "react";
import '../style/navbar.css'


const Nav = () =>{
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3006/typeforms').then(
            (res) => res.json()
            ).then(
                (data)=> setItems(data)
            )      
    },[])
   return ( 
   <nav className="navbar">
    <div className="workspace">
        <p> My workspace  / new typeforms  </p>   
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
