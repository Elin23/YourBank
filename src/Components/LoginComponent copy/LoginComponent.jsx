import React, { useState } from 'react';

import './LoginComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import SocialButtonComponent from '../SocialLoginButtonComponent/SocialButtonComponent'
import imgGmail from '../../assets/imgs/login icons/Icon.png'
import imgFacebook from '../../assets/imgs/login icons/Vector.png'
import imgApple from '../../assets/imgs/login icons/Icon (3).png'
import { Link } from "react-router-dom";
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent'
import { Col, Row } from 'react-bootstrap'
import img from '../../assets/imgs/login icons/Icon (1).png'
export default function LoginComponent() {
    
        const [type, setType] = useState('password');
        const [password, setPassword] = useState('');
        const [messagePass, setMessagePass] = useState('');
        const [icon, setIcon] = useState(img);
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        // password regex
        const passwordRegex = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/;
        // email regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const handlePasswordChange = (e) => {
          const newPassword = e.target.value;
          setPassword(newPassword);
      
          if (passwordRegex.test(newPassword)) {
            setMessagePass('Password is valid');
          } else {
            if(newPassword.length > 0)
                setMessagePass('Password must be at least 8 characters long and include both letters and numbers');
            else
                setMessagePass('');
          }
        }
      
    
        const handleEmailChange = (e) => {
            const inputEmail = e.target.value;
            setEmail(inputEmail);
        
            if (regex.test(inputEmail)) {
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
               setIcon(img);
               setType('text')
            } else {
               setIcon(img)
               setType('password')
            }
         }

  return (
    <section className="AA-login-section AA-px-297 pb-150">
        <div className="AA-design"></div>
        <div className="AA-login-container content">
            <div className="AA-bg-img overlay"></div>
            <div className="opacity">
                <TitleComponent
                    title="Login"
                    desc="Welcome back! Please log in to access your account."
                    highlightedWords={["Login"]}
                    />
                <form>
                    <div className="AA-inputs">
                        <div className="AA-input-Fields">
                            <input className="AA-email-input f-18 fw-300" placeholder="Enter your Email" onChange={handleEmailChange} />
                            <p className={`AA-error ${message.length == 0 ? "AA-hide" : "AA-show" }`}>{message}</p>                    
                        </div>
                        <div className="AA-input-Fields">
                            <div className="AA-password-input-group">
                                <input className="AA-password-input f-18 fw-300" type={type} value={password} placeholder="Enter your Password" onChange={handlePasswordChange}/>
                                <span class="AA-icon-pass" onClick={handleToggle}>
                                    <i class="fa-solid fa-eye eye-icon"  onClick={handleToggle}></i>
                                </span>
                            </div>
                            <p className={`AA-error ${messagePass.length == 0 ? "AA-hide" : "AA-show" }`}>{messagePass}</p>
                        </div>
                    
                    </div>
                    <Link className="AA-forget-pass-btn f-18 fw-400" to="#">Forgot Password?</Link>
                    <CustomButtonComponent title="Login" IsColor={true} />
                    <CustomButtonComponent title="Sign Up" IsColor={false}/>
                    <div className="AA-continue-p">
                        <p>Or Continue with</p>
                    </div>
                    <div className="AA-social-btns">
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
