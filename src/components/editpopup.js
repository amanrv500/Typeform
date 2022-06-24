import React, {useState,useEffect} from 'react'
import axios from 'axios'
import '../style/editpopup.css'
import PropTypes from "prop-types";

const Editpopup = (props) => {
    const [show, setshow] = useState(false);
    const [names, setNames] = useState({
        names: "new"
    });
    const closeHandler = () => { 
        setshow(false) 
        props.onCLose(false)
    }

    useEffect(() => {
        setshow(props.show)
    },[props.show])
    
    return (
        <div
          style={{
            visibility: show ? "visible" : "hidden",
            opacity: show ? "1" : "0"
          }}
          className='overlay'
        >
          <div className='editpopup'>
            <h2>Change the form name</h2>
            <input onChange={(e)=> {setNames(e.target.value)}} id='name'  type="text"  className="modify"/>
            <span className='close' onClick={closeHandler}>
            <input type="submit" onClick={(e) => axios.patch(`http://localhost:3006/typeforms/${props.newid}`, {name: names} )}  value="Edit" className="edit"/>
            </span>
            
          </div>
        </div>
      );
};

Editpopup.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Editpopup;




// return (
// <div>
//     <div className="editpopup">
//         <h3 className="edit-text">Change the form name </h3>
       
        
//     </div>
// </div>
// )

//<div className='editcontent'>contttntnt</div>