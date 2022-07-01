import React,{useState,useEffect} from 'react';
import {GoMail} from 'react-icons/go'
import {RiLockPasswordLine} from 'react-icons/ri'
import {useNavigate} from 'react-router-dom'
import "../style/loginpage.css"
import {FaRegUser} from 'react-icons/fa'
import axios from 'axios';




const Signuppage = () => {
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
      <div className='signin'>
        <h4 className='welcome'>
             <pre> Join Typeform! <h5>Create new account</h5></pre>  
        </h4>

        <label>Email</label>
        <span className='input'>
            <GoMail />
        <input className='input-bar' type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        </span> 

        <label>Username</label>
        <span className='input'>
            <FaRegUser />
        <input className='input-bar' type='text' placeholder='username' onChange={(e) => setUsr(e.target.value)}/>
        </span>  

        <label>Password</label>
        <span className='input'>
            <RiLockPasswordLine />
        <input  className='input-bar' type='password' placeholder='password' onChange={(e) => setPwd(e.target.value)}/>
        </span>  
       
        <button className='sub-btn' type='submit' value='Sign Up' onClick={submit}> Sign Up </button>

        <label className='label'>Already Have Account Login Here!</label>
        <button className='login-btn' onClick={() => Navigate('/loginpage')}>Login</button>

      </div>
    
    </div>
    
    
  );
}


export default Signuppage;
