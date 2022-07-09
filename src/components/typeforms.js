import React, { useEffect,useState,useRef } from "react";
import customaxios from "../api/customaxios";
import { useNavigate } from "react-router-dom";
import {AiFillEdit} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai";
import '../style/typeforms.css'
import Editpopup from "./editpopup";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";





const Typeform = () => {

    let Navigate  = useNavigate();
    const url = `/typeforms`

    const [items,setItems]=useState([]);

    const [typeid,setTypeid]=useState();

    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };
    useEffect(()=>{
        customaxios.get(url).then(
            (res) => {
            const alldata = res.data;
             setItems(alldata);
            });
    },[typeid])  

    return ( 
        <Container fluid className=" vw-100 d-flex">
            {/* <Card  className="grid1 m-2">
                <Card.Body className='p-0'>
                    <p className='p-4 m-4'>
adadad
                    </p>
                    <Row className="border-top m-0 p-1">
                        fcdg
                    </Row>
                </Card.Body>
            </Card> */}
             <Row>
                { items && items.map(item=> {
                 const { id, name } = item;
                 return(
                    <Col key={id} >
                     <Card className="grid1 m-2 " > 
                     <Card.Body className='p-0 d-flex align-items-center' onClick={()=>Navigate(`/homepage/${id}`)}>
                            <p className='px-1 m-4 ' >
                                {name}
                            </p>
                     </Card.Body>
                     <Card.Footer className="border-top m-0 p-2 d-flex align-items-center justify-content-between">
                        <AiFillEdit color="#a0a0a0"  onClick={()=>{setTypeid(id);setVisibility(!visibility)}}/>
                        <AiFillDelete color="#a0a0a0" onClick={() => customaxios.delete(`${url}/${id}`)} />
                     </Card.Footer>
                    </Card>
                    </Col>
                 )
             })}
             </Row>
             <Editpopup onClose={popupCloseHandler} show={visibility} newid={typeid} />
        </Container>

    )
    
}

export default Typeform;

        // <div className="typeform">
        //     { items && items.map(item=> {
        //         const { id, name } = item;
        //         return(
        //             <div key={id} className="grid1"  >
        //             <div className="uper" onClick={()=>Navigate(`/homepage/${id}`)}>
        //                 <p className="type-text">
        //                    {name}
        //                 </p>
        //             </div>
        //             <div className='lower'>
        //                 <span onClick={()=>{setTypeid(id);setVisibility(!visibility)}}>
        //                    <AiFillEdit className='eddl'/>
        //                 </span> 
        //                 <span onClick={() => axios.delete(`http://localhost:3006/typeforms/${id}`)} >
        //                     <AiFillDelete className="eddl"/>
        //                 </span>
        //             </div>
        //             </div>
        //         )
        //     })}
        //      <Editpopup onClose={popupCloseHandler} show={visibility} newid={typeid} />
        //  </div>




 


