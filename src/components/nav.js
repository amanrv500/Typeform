import customaxios from "../api/customaxios";
import React, {useEffect, useState} from "react";
import '../style/navbar.css'
import {ar } from '../assets';
import {useParams} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";


const Nav1 = () =>{

    const param = useParams();
    const tid = param.id;
    const [items,setItems]=useState([]);

    useEffect(()=>{
        customaxios.get(`typeforms/${tid}`).then(
            (res) => {
            const alldata = res.data;
             setItems(alldata);
            });      
    },[])

   return (
    <Navbar className="topnav p-0" variant="light">
        <Nav className="container-fluid d-flex p-0">
            <Nav.Item>
                <Navbar.Brand >
                    <p className="workspace ps-2 fs-6 fs-sm-8">My Workspace / </p><p className="d-inline fs-6 fs-sm-8">{items.name}</p>
                </Navbar.Brand>
            </Nav.Item>
            <Nav.Item className="d-flex my-0">
                <Nav.Link className="middle">
                    Create
                </Nav.Link>
                <Nav.Link className="middle">
                    Connect
                </Nav.Link>
                <Nav.Link className="middle">
                    Share
                </Nav.Link>
                <Nav.Link className="middle">
                    Result
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="ml-auto">
                <Nav.Link>
                    <img src={ar}  width="30" height="30" className="align-top"  alt="ar"/>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
   );
}

export default Nav1;
