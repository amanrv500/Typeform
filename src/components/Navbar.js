import React from "react";
import '../style/navbar.css'


const Navbar = () =>{
   return ( 
   <nav className="navbar">
      <img src={require('../assets/Logo3.png')} className="logo" alt="logo"/>
      <img src={require('../assets/ar.jpg')} className="ar" alt="ar"/>
   </nav>
   );
}

export default Navbar;
