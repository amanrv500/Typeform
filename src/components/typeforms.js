import React, { useEffect,useState } from "react";
import customaxios from "../api/customaxios";
import { useNavigate } from "react-router-dom";
import {AiFillEdit} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai";
import '../style/typeforms.css'
import { Card, Col, Container, Row, Modal,Button, FormControl } from "react-bootstrap";

const Typeform = () => {
    let Navigate  = useNavigate();
    const url = `/typeforms`
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [items,setItems]=useState([]);
    const [typeid,setTypeid]=useState();
    const [names, setNames] = useState({
        names: "new"
    });
    const updateId = (id) => {
        setTypeid(id);
        setShow(true)
    }
    const updateName = () => {
        customaxios.patch(`${url}/${typeid}`,{name: names})
        .then(res => {
            console.log(res);
            setShow(false)
        })
    }
    const deleteId = (id) => {
        customaxios.delete(`${url}/${id}`)
        .then(res => {
            console.log(res);
        })
    }
    useEffect(()=>{
        customaxios.get(url).then(
            (res) => {
            const alldata = res.data;
             setItems(alldata);
            });
    },[])  

    return ( 
        <Container fluid className=" vw-100 d-flex">
            <Row>
                { items && items.map(item=> {
                    const { id, name } = item;
                    return(
                        <Col key={id} >
                            <Card className="grid1 m-2" > 
                                <Card.Body className='p-0 d-flex align-items-center justify-content-center' onClick={()=>Navigate(`/homepage/${id}`)}>
                                    <p className='px-1 m-4 ' >
                                        {name}
                                    </p>
                                </Card.Body>
                                <Card.Footer className="border-top m-0 p-2 d-flex align-items-center justify-content-between">
                                    <AiFillEdit color="#a0a0a0"  onClick={()=>{updateId(id)}}/>
                                    <AiFillDelete color="#a0a0a0" onClick={() =>{deleteId(id)}} />
                                </Card.Footer>
                            </Card>
                        </Col>
                    )}
                )}
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Typeform Name</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <FormControl onChange={(e)=> {setNames(e.target.value)}} id='name' placeholder="Enter the Name Here!"  type="text" style={{border: "none"}}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={updateName}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
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




 


