import React, { useState } from 'react';

import './FormComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import SocialButtonComponent from '../SocialLoginButtonComponent/SocialLoginButtonComponent'
import imgGmail from '../../assets/imgs/login icons/Icon.png'
import imgFacebook from '../../assets/imgs/login icons/Vector.png'
import imgApple from '../../assets/imgs/login icons/Icon (3).png'
import { Link } from "react-router-dom";
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent'

export default function FormComponent({action}) {

        const [title, setTitle] = useState(action == 'login'? 'Login' : 'Sign Up');
        const [desc, setDesc] = useState(action == 'login'? 
            'Welcome back! Please log in to access your account.' 
            : 'Join our community today! Create an account to unlock exclusive features and personalized experiences.');
        
        const [icon, setIcon] = useState('show');
        const [type, setType] = useState('password');
        const [messagePass, setMessagePass] = useState('');
        const [message, setMessage] = useState('');
        const [messagefirstName, setMessagefirstName] = useState('');
        const [messagelastName, setMessagelastName] = useState('');

        // password regexthe 
        // password is 8 or more characters long ((?=.{8,})),
        // password has at least one uppercase letter ((?=.*[A-Z])),
        // password has at least one lowercase letter ((?=.*[a-z])) and contains at least one digit ((?=.*[0-9])).
        const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;;
        // email regex
        const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //name regex 
        const Nameregex =  /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/;

        const handleFirstNameChange = (event) => {
            const { value } = event.target.value;
            if(Nameregex.test(value)){
                setMessagefirstName('FirstName is valid');
            }else{
                if(value.length > 0)
                    setMessagefirstName('FirstName not valid');
                else
                    setMessagefirstName('');
            }
        };
        
        const handleLastNameChange = (event) => {
            const { value } = event.target.value;
            if(Nameregex.test(value)){
                setMessagelastName('LastName is valid');
            }else{
                if(value.length > 0)
                    setMessagelastName('LastName not valid');
                else
                    setMessagelastName('');
            }
        };

        const handlePasswordChange = (e) => {
          const newPassword = e.target.value;
          if(action == "signup")
          {
            if (passwordRegex.test(newPassword)) {
                setMessagePass('Password is valid');
            } else {
                if(newPassword.length > 0)
                    setMessagePass('Password must be at least 8 characters long and include both letters and numbers');
                else
                    setMessagePass('');
            }
          }
        }
      
        const handleEmailChange = (e) => {
            const inputEmail = e.target.value;

            if (emailregex.test(inputEmail)) {
                setMessage('Valid email address');
            } else {
                if(inputEmail.length > 0)
                    setMessage('Invalid email address');
                else
                setMessage('');
            }
        };
        
        const handleToggle = () => {
            if (type==='password'){
               setIcon('hide');
               setType('text')
            } else {
               setIcon('show')
               setType('password')
            }
         }

  return (
    <section className="AA-form-section AA-px-297 pb-150">

        <div className="AA-form-container">
            <div className="AA-design">
                <img src='../../assets/imgs/Abstract Design4.png' alt="design" />
            </div>
            <div className="overlay">
                <TitleComponent
                    title={title}
                    desc={desc}
                    highlightedWords={[title]}
                    />
                <form>
                {action == "signup"?
                    <div className="AA-inputs AA-input-pb">
                        {/* firstName input */}
                        <div className="AA-input-Fields AA-input-group">
                            <input className="AA-input f-18 fw-300" placeholder="Enter First Name" onChange={handleFirstNameChange} />
                            <p className={`AA-error ${messagefirstName.length == 0 ? "AA-hide" : "AA-show" }`}>{messagefirstName}</p>                    
                        </div>
                        {/* lastName input */}
                        <div className="AA-input-Fields AA-input-group">
                            <input className="AA-input f-18 fw-300" placeholder="Enter Last Name" onChange={handleLastNameChange} />
                            <p className={`AA-error ${messagelastName.length == 0 ? "AA-hide" : "AA-show" }`}>{messagelastName}</p>                    
                        </div>
                    </div> : <></>}
                    <div className="AA-inputs">
                        {/* email input */}
                        <div className="AA-input-Fields AA-input-group">
                            <input className="AA-input f-18 fw-300" placeholder="Enter your Email" onChange={handleEmailChange} />
                            <p className={`AA-error ${message.length == 0 ? "AA-hide" : "AA-show" }`}>{message}</p>                    
                        </div>
                        {/* password input */}
                        <div className="AA-input-Fields">
                            <div className="AA-input-group">
                                <input className="AA-password-input f-18 fw-300" type={type} placeholder="Enter your Password" onChange={handlePasswordChange}/>
                                <span className="AA-icon-pass" onClick={handleToggle}>
                                    <i className={`eye-icon ${icon == 'show' ? "fa-solid fa-eye" : "fa-regular fa-eye-slash"}`}  onClick={handleToggle}></i>
                                </span>
                            </div>
                            <p className={`AA-error ${messagePass.length == 0 ? "AA-hide" : "AA-show" }`}>{messagePass}</p>
                        </div>
                    </div>
                    {action == "login"? <Link className="AA-forget-pass-btn f-18 fw-400" to="#">Forgot Password?</Link> : <div className="AA-pb-40"></div>}
                    <CustomButtonComponent title={`${action==="login" ? "Login" : "Sign Up"}`} IsColor={true} />
                    <CustomButtonComponent title={`${action==="login" ? "Sign Up" : "Login"}`} IsColor={false}/>
                    <div className="AA-continue-p">
                        <p>Or Continue with</p>
                    </div>
                    <div className="AA-social-login-btns">
                        <SocialButtonComponent img={imgGmail}/>
                        <SocialButtonComponent img={imgFacebook} />
                        <SocialButtonComponent img={imgApple}/>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
