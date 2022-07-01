import React,{useState,useEffect} from 'react';
import {GoMail} from 'react-icons/go'
import {RiLockPasswordLine} from 'react-icons/ri'
import {useNavigate} from 'react-router-dom'
import "../style/loginpage.css"
import {FaRegUser} from 'react-icons/fa'
import axios from 'axios';



const Loginpage = () => {
    let Navigate = useNavigate();
    const url = "http://localhost:3006/users"
    const [usr, setUsr] = useState('')
    const [pwd, setPwd] = useState('')
    const [items,setItems]=useState([]);

    useEffect(()=> {
      axios.get(url).then(
          (res) => {
          const alldata = res.data;
           setItems(alldata);
           console.log(alldata)
          });
    },[])  

    const handle = () => {
      for(let i=0;i<items.length;i++){
        if(usr==items[i].username && pwd==items[i].password){
          Navigate('/homepage')
          console.log('login success')
        }
        console.log(usr,pwd)
      }
    }


 
  return (
  
    <div className='loginpage'>
      <div className='signin'>
        <h4 className='welcome'>
             <pre>  Welcome! <h5>    Typeform</h5></pre>  
        </h4>

        <label>Username</label>
        <span className='input'>
            <FaRegUser />
        <input className='input-bar' type='text' placeholder='username' onChange={(e) =>setUsr(e.target.value)}/>
        </span>  

        <label>Password</label>
        <span className='input'>
            <RiLockPasswordLine />
        <input  className='input-bar' type='password' placeholder='password' onChange={(e) =>setPwd(e.target.value)}/>
        </span>  
       
        <button className='submit-btn'  value='Login' onClick={handle} >Login</button>

        <label className='label'>Don't Have Account Create New!</label>
        <button className='loginbtn' onClick={() => Navigate('/Signuppage')}>Sign up</button>

      </div>
    
    </div>
    
    
  );
}


export default Loginpage;
