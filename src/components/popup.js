import React, {useState} from "react";
import customaxios from "../api/customaxios";
import { Modal,Button, FormControl } from "react-bootstrap";


const Popup = (props) =>{

    const url = "/typeforms"
    const [data, setData] = useState({
        name: ""
    })

    const handle = (e) => {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata);
    }

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const dateCreated = `${day}-${month}-${year}`;
    const modificationTime = `${day}-${month}-${year}/${hour}-${minute}-${second}`;
   
    

    const submit = () => {
        customaxios.post(url, {
            name: data.name,
            dateCreated: dateCreated,
            modificationTime: modificationTime
        }).then(res => {
            console.log(res.data)
         })
         props.onHide();
    }
   
    return (
        <Modal {...props} size="md" centered >
            <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter">
                    Type the form Name
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormControl onChange={(e) => handle(e)} id='name' type="text"  placeholder="Enter the Name Here!" style={{border: "none"}}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={(e) => submit(e)}>Create</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Popup;
