import React, {useState} from "react";
import axios from "axios";
import api from '../api/typef'
import '../style/popup.css'


const Popup = () =>{

   const url = "http://localhost:3006/typeforms"
   const [data, setData] = useState({
      name: ""
   })

   function handle(e){
      const newdata={...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata);
   }

   function submit(e){
      e.preventDefault();
      axios.post(url, {
         name: data.name}
         ).then(res => {
            console.log(res.data)
         })
   }

   
   return ( 
   <div className="pop">
        <h3 className="type-name">Type the form name </h3>
       <form onSubmit={(e) => submit(e)}>
       <input onChange={(e) => handle(e)} id='name' value={data.name} type="text" className="input-typeform-name" />
       <input type='submit' className="typeform-submit" />
       </form>
   </div>
   );
}

export default Popup;
