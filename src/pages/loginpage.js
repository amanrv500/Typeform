import React,{useState,useEffect} from 'react';
import {GoMail} from 'react-icons/go'
import {RiLockPasswordLine} from 'react-icons/ri'
import {useNavigate} from 'react-router-dom'
import "../style/loginpage.css"
import {FaRegUser} from 'react-icons/fa'
import Customaxios from '../api/customaxios'
import { Card, Container, Form, Button } from 'react-bootstrap';



const Loginpage = () => {
    let Navigate = useNavigate();
    const [cred , setCred] = useState({
        username: "",
        password: "",
    });

    const url = "/users"
    const [items,setItems]=useState([]);

    useEffect(()=> {
      Customaxios.get(url).then(
          (res) => {
          const alldata = res.data;
           setItems(alldata);
           console.log(alldata)
          });
    },[]) 
    
    const update = (e) => {
        const { name, value } = e.target;
        setCred({
          ...cred,
          [name]: value,
        });
    }

    const handle = () => {
      for(let i=0;i<items.length;i++){
        if(cred.username==items[i].username && cred.password==items[i].password){
          Navigate('/homepage')
          console.log('login success')
        }
      }
    }


 
  return (
    <div className='loginpage'>
    <div className='newsignup d-flex 
    justify-content-center align-items-center'>
      
      <Form className='rounded p-4 p-sm-3 h-80 w-50'>
          <h3 className='text-center'>Welcome!</h3>
          <h6 className='text-center'>Typeform</h6>
          <Form.Group className='mb-3' controlId="formBasicUsername">
              <Form.Label>
                  Username
              </Form.Label>
              <Form.Control type="text" placeholder="Username" onChange={update} className='glyphicon glyphicon-user' name='username'/>
          </Form.Group>
          <Form.Group className='mb-3' controlId="formBasicPassword">
              <Form.Label>
                  Password
              </Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={update} name='password'/>
          </Form.Group>
         <div className='text-center'>
         <Button type="submit" onClick={handle} className='mb-3 w-50 btn-primary' >Login</Button>
          <h6>Don't Have a Account Create New!</h6>
          <Button variant="primary" type="submit" onClick={() => Navigate('/Signuppage')} className='w-50'>Sign Up</Button>
         </div>
      </Form>
    </div>
  </div>
    
    
  );
}


export default Loginpage;
