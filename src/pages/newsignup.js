import React,{useState,useEffect} from 'react';
import {GoMail} from 'react-icons/go'
import {RiLockPasswordLine} from 'react-icons/ri'
import {useNavigate} from 'react-router-dom'
import "../style/loginpage.css"
import {FaRegUser} from 'react-icons/fa'
import axios from 'axios';
import { Card, Container, Form, Button } from 'react-bootstrap';




const NewSignuppage = () => {
    const Navigate = useNavigate();
    const url = "http://localhost:3006/users"
    const [usr, setUsr] = useState('')
    const [pwd, setPwd] = useState('')
    const [email, setEmail] = useState('')

    

    const submit = () => {
        axios.post(url, {
            username: usr,
            password: pwd,
            email: email
        }).then(res => {
            console.log(res.data)
        }
        ).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        console.log(usr, pwd, email)

    }, [usr, pwd, email])



 
  return (
  
    <div className='loginpage'>
      <div className='newsignup d-flex 
      justify-content-center align-items-center'>
        
        <Form className='rounded p-4 p-sm-3 h-80 w-50'>
            <h3 className='text-center'>Join Typeform</h3>
            <h6 className='text-center'>Create new Account!</h6>
            <Form.Group className='mb-3' controlId="formBasicUsername">
                <Form.Label>
                    Username
                </Form.Label>
                <Form.Control type="text" placeholder="Username" onChange={(e) => setUsr(e.target.value)} className='glyphicon glyphicon-user'/>
            </Form.Group>
            <Form.Group className='mb-3 ' controlId="formBasicEmail">
                <Form.Label>
                    Email address
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className='mb-3' controlId="formBasicPassword">
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPwd(e.target.value)}/>
            </Form.Group>
           <div className='text-center'>
           <Button type="submit" onClick={submit} className='mb-3 w-50 btn-primary' >Sign Up</Button>
            <h6> Already Have a Account Login Here!</h6>
            <Button variant="primary" type="submit" onClick={() => Navigate('/login')} className='w-50'>Login</Button>
           </div>
        </Form>
      </div>
    </div>
    
    
  );
}


export default NewSignuppage;
