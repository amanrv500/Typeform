import React, { useEffect,useState } from "react";
import api from '../api/typef'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {AiFillEdit} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai";
import '../style/typeforms.css'
import { BsPatchCheck } from "react-icons/bs";




const Typeform = () => {

    let Navigate  = useNavigate();
    const url = "http://localhost:3006/typeforms/"

    const [names, setNames] = useState({
        name: " "
     })

    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch(url).then(
            (res) => res.json()
            ).then(
                (data)=> setItems(data)
            )
          
    },[])

    function handle(e){
        const newdata={...names}
        newdata[e.target.id] = e.target.value
        setNames(newdata)
        console.log(newdata);
       
     }

     function submit(e){
        e.preventDefault();
        axios.put(url, {
           name: names.name}
           ).then(res => {
              console.log(res.data)
           })
           
     }

    return ( 
        <div className="typeform">
            {items.map(item=>(
                <div key={item.id} className="grid1"  >
                    <div className="uper" onClick={()=>Navigate(`/homepage/${item.id}`)}>
                        <p className="type-text">
                           {item.name}
                        </p>
                    </div>
                    <div className='lower'>
                        
                        
                          <span >
                            <input onChange={(e)=> {setNames(e.target.value)}} id='name' value={names.name} type="text"  className="modify"/>
                            <input type="submit" onClick={(e) => axios.patch(`http://localhost:3006/typeforms/${item.id}`, {name: names.name} )} />
                        </span>
                       
                        <span onClick={() => axios.delete(`http://localhost:3006/typeforms/${item.id}`)} >
                            <AiFillDelete className="eddl"/>
                        </span>
                    </div>
                </div>
            ))}
         </div>
    )
    
}

export default Typeform;



 


