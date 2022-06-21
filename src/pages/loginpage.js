import React from 'react';
import {GoMail} from 'react-icons/go'
import {RiLockPasswordLine} from 'react-icons/ri'
import {useNavigate} from 'react-router-dom'
import "../style/loginpage.css"



const Loginpage = () => {
    let Navigate = useNavigate();
 
  return (
  
    <div className='loginpage'>
      <div className='signin'>
        <h4 className='welcome'>
             <pre>  Welcome! <h5>Join Typeform</h5></pre>  
        </h4>

        <label>Email or Username</label>
        <span className='input'>
            <GoMail />
        <input className='input-bar' type='text' placeholder='username'/>
        </span>  

        <label>Password</label>
        <span className='input'>
            <RiLockPasswordLine />
        <input  className='input-bar' type='password' placeholder='password'/>
        </span>  
       
        <input className='submit-btn' type='submit' value='Sign Up' />

        <label className='label'>Already Have Account Join Here!</label>
        <button className='loginbtn' onClick={() => Navigate('/homepage')}>Login</button>

      </div>
    
    </div>
    
    
  );
}


export default Loginpage;
