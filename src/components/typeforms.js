import React, { useEffect,
                useState } from "react";
import customaxios from "../api/customaxios";
import { useNavigate } from "react-router-dom";
import {AiFillEdit} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai";
import '../style/typeforms.css'
import { Card, 
         Col, 
         Container, 
         Row, 
         Modal,
         Button, 
         FormControl,
         Dropdown} from "react-bootstrap";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import {RiDeleteBin5Line} from "react-icons/ri";
import {BsThreeDotsVertical} from "react-icons/bs";

const Typeform = (props) => {
    let Navigate  = useNavigate();
    const url = '/typeforms'
    const url2 = '/Questions'
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [items,setItems]=useState([]);
    const [forms,setForms]=useState([]);
    const [typeid,setTypeid]=useState();
    const [names, setNames] = useState({
        names: "new"
    });
    const updateId = (id) => {
        setTypeid(id);
        setShow(true)
    }

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    // const dateString = `${day}-${month}-${year}`;
    const modificationTime = `${day}-${month}-${year}-${hour}-${minute}-${second}`;

    const updateName = () => {
        customaxios.patch(`${url}/${typeid}`,{
            name: names,
            modificationTime: modificationTime
        })
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

    const getItems = (id) => {
        const data = forms.filter(item => item.formID === id);
        return data.length;
    }

    useEffect(()=>{
        customaxios.get(url).then(
            (res) => {
            const alldata = res.data;
             setItems(alldata);
            });
        customaxios.get(url2)
            .then((res) => {
                console.log(res);
                setForms(res.data);
            });
    },[])

    const sortByDate = () => {
        items.sort((a, b) => {
            let da = new Date(a.dateCreated),
                db = new Date(b.dateCreated);
            return da - db;
        });
    }
    

    const sortByLastUpdated = () => {
        items.sort((a, b) => {
            let da = new Date(a.modificationTime),
                db = new Date(b.modificationTime);
            return db - da;
        });
    }

   
    const sortByAlphabetical = () => {
        items.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }

     const getDate = (date) => {
        const dateString = date.split("-");
        const year = dateString[2];
        const month = dateString[1];
        const day = dateString[0];
        return `${day}-${month}-${year}`;
    }

    if(props.sortby === 'dateCreated'){
        sortByDate();
    }
    if(props.sortby === 'lastUpdated'){
        sortByLastUpdated();
    }
    if(props.sortby === 'alphabetical'){
        sortByAlphabetical();
    }


    if(props.show === 'grid'){
        return ( 
            <Container fluid className=" vw-100 d-flex">
                <Row>
                    { items && items.map(item=> {
                        const { id, name } = item;
                        return(
                            <Col key={id} >
                                <Card className="grid1 m-2" > 
                                    <Card.Body 
                                        className='p-0 d-flex align-items-center justify-content-center' 
                                        onClick={()=>Navigate(`/homepage/${id}`)}>
                                        <p className='px-1 m-4 ' >
                                            {name}
                                        </p>
                                    </Card.Body>
                                    <Card.Footer className="border-top m-0 p-2 d-flex align-items-center justify-content-between">
                                        <AiFillEdit 
                                            color="#a0a0a0"  
                                            onClick={()=>{updateId(id)}}/>
                                        <AiFillDelete 
                                            color="#a0a0a0" 
                                            onClick={() =>{deleteId(id)}} />
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
                        <FormControl 
                            onChange={(e)=> {setNames(e.target.value)}} 
                            id='name' 
                            placeholder="Enter the Name Here!"  
                            type="text" 
                            style={{border: "none"}}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            variant="secondary" 
                            onClick={updateName}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
    else if(props.show === 'list'){
        return (
            <Container fluid className="vw-100" >
                <Row className=" mx-3 p-1">
                    <Col className="">
                        <span className='text-black-50'>
                            Typeform
                        </span>
                    </Col>
                    <Col className='text-black-50 d-flex justify-content-evenly'>
                        <span className=" ps-3 ms-2">
                            Questions
                        </span>
                        <span className=" ms-0 pe-5 me-5 ">
                            Updated
                        </span>
                    </Col>
                </Row>
                { items && items.map(item=> {
                    const { id, name, dateCreated, modificationTime } = item;
                    return(
                        <Row 
                            className="border p-1 mx-3 my-2 bg-white list1" 
                            key={id} >
                            <Col 
                                className='d-flex align-items-center justify-content-start' 
                                onClick={()=>Navigate(`/homepage/${id}`)} >
                                <span className=' m-0 d-flex flex-column'>
                                    <p className=" m-0">
                                        {name}
                                    </p>
                                    <p className="text-secondary m-0" 
                                        style={{fontSize:"12px"}}>
                                        Created: {dateCreated}
                                    </p>
                                </span>
                            </Col>
                            <Col className='d-flex justify-content-between' >
                                <span 
                                    className='d-flex align-items-center justify-content-evenly w-90 ps-4 ' 
                                    onClick={()=>Navigate(`/homepage/${id}`)}>
                                        <span>
                                            {getItems(id)}
                                        </span>
                                        <span>
                                            {getDate(modificationTime)}
                                        </span>
                                </span>
                                <div  className="three-dot p-0">
                                    <Dropdown 
                                        drop="bottom" 
                                        className='m-0 p-0'>
                                        <DropdownToggle 
                                            variant="none" 
                                            className="dt">
                                            <BsThreeDotsVertical />
                                        </DropdownToggle>
                                        <Dropdown.Menu 
                                            style={{zIndex:'4'}} 
                                            className="shadow-sm drpmenu">
                                            <Dropdown.Item >
                                                <span 
                                                    className="d-flex align-items-center" 
                                                    onClick={() =>{deleteId(id)}}  >
                                                    <RiDeleteBin5Line className="me-2"/>
                                                    Delete
                                                </span>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <span 
                                                    className="d-flex align-items-center" 
                                                    onClick={()=>{updateId(id)}} >
                                                    <AiFillEdit className="me-2"/>
                                                    Edit Name
                                                </span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>
                    )}
                )}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Typeform Name</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <FormControl 
                            onChange={(e)=> {setNames(e.target.value)}} 
                            id='name' 
                            placeholder="Enter the Name Here!"  
                            type="text" 
                            style={{border: "none"}}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            variant="secondary" 
                            onClick={updateName}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        )
    }
}

export default Typeform;