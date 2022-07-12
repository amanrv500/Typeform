import React from "react";
import { Navbar, Nav  } from "react-bootstrap";
import '../style/navbar.css'
import { logo, ar  } from '../assets';

const Navbar1 = () =>{
   return ( 
      <Navbar className="topnav p-0" variant="info" bg="white" fixed="top">
         <Nav className="container-fluid">
            <Nav.Item>
               <Navbar.Brand>
                  <img src={logo} width="30" height="30" className="m-2 mb-0 mt-0 align-top" alt="logo"/>
               </Navbar.Brand>
            </Nav.Item>
            <Nav.Item className="ml-auto">
               <Nav.Link>
                  <img src={ar}  width="30" height="30" className=" align-top"  alt="ar"/>
               </Nav.Link>
            </Nav.Item>
         </Nav>
      </Navbar>
   );
}  
export default Navbar1;