import React, { useEffect,useState } from "react";
import api from '../api/typef'
import axios from "axios";



const Typeform = () => {

    const [items,setItems]=useState([]);

    // const retrieveForms =  async () => {
    //     const Forms = await api.get("/typeforms");
    //     return Forms;
    // }
    // const getData = async () => {
    //     const alldata = await retrieveForms();
    //     if(alldata) setData(alldata);
    // }

      useEffect(()=>{
        fetch('http://144.24.145.122:3000/forms').then((res) => res.json()).then((data)=> setItems(data))      
      })

    

        return ( 
           <div className="typeform">
               {items.map(item=>(
                    <div key={item.id} className="grid1">
                        <p className="type-text"> {item.name} </p>
                        </div>
                ))}
            </div>
        )
    
}

export default Typeform;

 


