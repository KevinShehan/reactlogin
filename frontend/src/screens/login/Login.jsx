
import './Login.css'

// import {validateEmail} from '../../validations/loginValidation';

import Button from '../../components/button/Button';
import Loginimg from '../../assets/Loginimg.svg';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});


    // const handleEmailInput = (e) => {
    //     setEmail(e.target.value)
    // }
    // const handlePasswordInput = (e) => {
    //     setPassword(e.target.value)
    // }

    // const handleSignUpClick = ()=>{
    //     const emailValid = validateEmail(email)

    //     if(!emailValid){
    //         alert("Email is required");
    //         return;
    //     }
    //     if(!password){
    //         alert("Password is required");
    //         return;
    //     }

    //     console.log("CALL YOUR LOGIN FUNCTION HERE")
    // }


    // Validation functions
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validatePassword = (password) => {
      return password.length >= 6;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validate email
      if (!validateEmail(email)) {
        toast.error('Invalid email address', {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }
  
      // Validate password
      if (!validatePassword(password)) {
        toast.error('Password must be at least 6 characters', {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }
  
      // If validation passes, submit the form or perform any desired action
      console.log('Form submitted');
    };
  
    return (
        <div className="screen">
            <div className="card">
                <div className="card-left">
                    <div className="circle-with-text">
                        &nbsp; MyWebsite Login
                    </div>
                    <div className="card-content">
                        <h1>Welcome Back</h1>
                        <p>Welcome back please enter your details</p>
                        <form onSubmit={handleSubmit}>
                            <div className='form'>
                                <label> Email</label>
                                <br />
                                <input type="email" name="email" id="email" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                {errors.email && <p className="error">{errors.email}</p>}
                                <br />
                                <label>   Password</label>
                                <br />
                                <input type="password" name="password" id="password" value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                {errors.password && <p className="error">{errors.password}</p>}

                                <Button label="Sign in" />
                                <button className='Loging'>Sign in with Google</button>
                            </div>
                        </form>
                        <ToastContainer />
                        <p>Don&apos;t have an account? <a href="#">Sign Up</a></p>
                    </div>
                </div>
                <div className="card-right">
                    <img src={Loginimg} alt="" />
                </div>
            </div>
        </div>
    )
}
