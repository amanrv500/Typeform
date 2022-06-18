import React from "react";


const Navbar = () =>{
   return ( 
   <nav className="navbar">
      <img src={require('../assets/Logo3.png')} className="logo"/>
      <img src={require('../assets/ar.jpg')} className="ar"/>
   </nav>
   );
}

export default Navbar;
