import customaxios from "../api/customaxios";
import React, {useEffect, useState} from "react";
import '../style/navbar.css'
import {ar } from '../assets';
import {useParams} from "react-router-dom";
import { Navbar, Nav,Row,Col } from "react-bootstrap";


const Nav1 = () =>{

    const param = useParams();
    const tid = param.id;
    const url = '/typeforms';
    const [items,setItems]=useState([]);

    useEffect(()=>{
        customaxios.get(`${url}/${tid}`).then(
            (res) => {
                const alldata = res.data;
                    setItems(alldata);
            });      
    },[])

    return (
        <Navbar className="m-0 p-0 border-bottom bg-white " fixed="top">
            <Col className="p-2- d-flex align-items-center">
                <span className="workspace me-1" style={{color:"grey"}}>
                    My workspace / 
                </span>
                <span className="workspace text-dark">
                    {items.name}
                </span>
            </Col>
            <Col className="px-2 d-flex justify-content-center my-0 py-0">
                <p className="middle my-0 py-0 d-flex me-2 mb-0 align-items-center createtext">
                    Create
                </p>
                <p className="middle my-0 py-3 d-flex me-2 mb-0  align-items-center">
                    Logic
                </p>
                {/* <p className="middle my-0 py-3 d-flex me-2 mb-0 align-items-center">
                    Share
                </p>   
                <p className="middle my-0 py-3 d-flex me-2 mb-0 align-items-center">
                    Result
                </p>      */}
            </Col>
            <Col className="p-2 d-none d-sm-flex d-lg-flex justify-content-end">
                <img src={ar}  width="30" height="30" className="align-top"  alt="ar"/>
            </Col>
        </Navbar>
    );
}

export default Nav1;
