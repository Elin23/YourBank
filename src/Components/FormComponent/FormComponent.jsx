import React, { useEffect, useState } from "react";
import "./FormComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import { SocialLoginData } from '../../Data/SocialLoginData'
import { Link, useNavigate } from "react-router-dom";
import IconGradient from '../IconGradient/IconGradient'

export default function FormComponent({ action }) {
  const navigate = useNavigate();
  const title = action === "login" ? "Login" : "Sign Up";
  const desc = action === "login"
    ? "Welcome back! Please log in to access your account."
    : "Join our community today! Create an account to unlock exclusive features and personalized experiences.";

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [icon, setIcon] = useState("show");
  const [type, setType] = useState("password");

  const Toast = Swal.mixin({
    showConfirmButton: false,
    timer: 2000,
    scrollbarPadding: false,
    heightAuto: false, 
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    },
  });

  const [messages, setMessages] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // password regexthe
  // password is 8 or more characters long ((?=.{8,})),
  // password has at least one uppercase letter ((?=.*[A-Z])),
  // password has at least one lowercase letter ((?=.*[a-z])) and contains at least one digit ((?=.*[0-9])).

  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  // email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //name regex
  //At least a letter after the first letter
  const NameRegex = /^[a-zA-Z]([a-zA-Z]{1,39})+$/;

  const validateInput = (id, value) => {
    let message = "";
    if (id === "firstName" || id === "lastName") {
      message = NameRegex.test(value) ? `${id.charAt(0).toUpperCase() + id.slice(1)} is valid` : (value.length > 0 ? `${id.charAt(0).toUpperCase() + id.slice(1)} not valid` : "");
    } else if (id === "email") {
      message = emailRegex.test(value) ? "Valid email address" : (value.length > 0 ? "Invalid email address" : "");
    } else if (id === "password" && action === "signup") {
      message = passwordRegex.test(value) ? "Password is valid" : (value.length > 0 ? "Password must be at least 8 characters long and include both letters and numbers" : "");
    }
    return message;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setState(prevState => ({ ...prevState, [id]: value }));
    setMessages(prevMessages => ({ ...prevMessages, [id]: validateInput(id, value) }));
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon("hide");
      setType("text");
    } else {
      setIcon("show");
      setType("password");
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    var titleSwal = "";
    if (action == "login") {
      if (
        state.email.length > 0 &&
        state.password.length > 0 &&
        emailRegex.test(state.email)
      ) {
        /*calling api login here          
        *
        *
        * */

        // fake process data (local storage) login
        const users = JSON.parse(localStorage.getItem('users'));
        //check if there is no users stored in db 
        if (users) {
          //get user data from db 
          const user = users.find(user => user.email === state.email);
          if (user) {
            if (user.password === state.password) {
              const userData = {
                userName: user.firstName + " " + user.lastName, //add
                email: user.email,
                token: "api token",
              };
              localStorage.setItem("isLogin", JSON.stringify(true));
              localStorage.setItem("user", JSON.stringify(userData)); //add
              localStorage.setItem("isVisible", true);
              window.dispatchEvent(new Event('StatusVisibleChanged'));
              Toast.fire({
                icon: 'success',
                title: "Welcome back, " + user.firstName + " " + user.lastName + "! You have successfully logged in. Enjoy your experience.",
              });
              navigate('/');
            } else {
              //no account in db 
              Toast.fire({
                icon: 'error',
                title: "Oops! The username or password you entered doesn't match our records. Please double-check and try again.",
              });
            }
          } else {
            //no account in db 
            Toast.fire({
              icon: 'error',
              title: "Oops! The username or password you entered doesn't match our records. Please double-check and try again.",
            });
          }
        }
        else {
          //no account in db 
          Toast.fire({
            icon: 'error',
            title: "Oops! The username or password you entered doesn't match our records. Please double-check and try again.",
          });
        }
      }
    } else {
      if (
        state.email.length > 0 &&
        state.password.length > 0 &&
        state.firstName.length > 0 &&
        state.lastName.length > 0 &&
        emailRegex.test(state.email) &&
        passwordRegex.test(state.password) &&
        NameRegex.test(state.firstName) &&
        NameRegex.test(state.lastName)
      ) {
        /*          
       *
       *calling api signup here
       * */

        // fake process data (local storage) signup
        let users = JSON.parse(localStorage.getItem('users'));
        //check if there is no users stored in db
        if (users) {
          //check if there is same email in db 
          const user = users.find(user => user.email === state.email);
          if (user) {
            Toast.fire({
              icon: 'error',
              title: "It seems you already have an account with the email " + state.email + ". Please log in to access your account.",
            });
          } else {
            //save user data            
            users.push(state);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("isNewUser", "true");
            window.dispatchEvent(new Event('StatusChanged'));
            localStorage.setItem("isVisible", true);
            window.dispatchEvent(new Event('StatusVisibleChanged'));
            const userData = {
              userName: state.firstName + " " + state.lastName, //add
              email: state.email,
              token: "api token",
            };
            localStorage.setItem("isLogin", JSON.stringify(true));
            localStorage.setItem("user", JSON.stringify(userData));
            Toast.fire({
              icon: 'success',
              title: "Welcome to YourBank " + state.firstName + " " + state.lastName,
            });
            navigate('/');
          }
        } else {
          //save user data  
          localStorage.setItem("users", JSON.stringify([state]));
          const userData = {
            userName: state.firstName + " " + state.lastName, //add
            email: state.email,
            token: "api token",
          };
          localStorage.setItem("isLogin", JSON.stringify(true));
          localStorage.setItem("user", JSON.stringify(userData));
          Toast.fire({
            icon: 'success',
            title: "Welcome to YourBank " + state.firstName + " " + state.lastName,
          });
          navigate('/');
        }
      }
    }
  };

  return (
    <section className="AA-form-section AA-px-297 pb-150">
      <div className="AA-form-container">
        <div className="AA-design">
          <img src="../../assets/imgs/AbstractDesign4.png" alt="design" />
        </div>
        <div className="AA-form-container-bg">
          <TitleComponent
            title={title}
            desc={desc}
            highlightedWords={[title]}
            fw={false}
          />
          <form onSubmit={submitForm}>
            {action === "signup" && (
              <div className="AA-inputs-row AA-input-pb">
                {/* firstName and lastName inputs */}
                {["firstName", "lastName"].map((field) => (
                  <div className="AA-input-Fields AA-input-group" key={field}>
                    <input
                      id={field}
                      className="AA-input f-18 fw-300"
                      placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                      value={state[field]}
                      onChange={handleInputChange}
                      required
                    />
                    <p className={`AA-error ${messages[field].length === 0 ? "AA-hide" : "AA-show"}`}>
                      {messages[field]}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <div className="AA-inputs-row">
              {/* email input */}
              <div className="AA-input-Fields AA-input-group">
                <input
                  id="email"
                  type="email"
                  className="AA-input f-18 fw-300"
                  placeholder="Enter your Email"
                  value={state.email}
                  onChange={handleInputChange}
                  required
                />
                <p className={`AA-error ${messages.email.length === 0 ? "AA-hide" : "AA-show"}`}>
                  {messages.email}
                </p>
              </div>
              {/* password input */}
              <div className="AA-input-Fields">
                <div className="AA-input-group">
                  <input
                    id="password"
                    className="AA-password-input f-18 fw-300"
                    type={type}
                    value={state.password}
                    placeholder="Enter your Password"
                    onChange={handleInputChange}
                    required
                  />
                  <span className="AA-icon-pass" onClick={handleToggle}>
                    <i className={`eye-icon ${icon === "show" ? "fa-solid fa-eye" : "fa-regular fa-eye-slash"}`}></i>
                  </span>
                </div>
                <p className={`AA-error ${messages.password.length === 0 ? "AA-hide" : "AA-show"}`}>
                  {messages.password}
                </p>
              </div>
            </div>
            {action === "login" ? (
              <Link className="AA-forget-pass-btn f-18 fw-400" to="#">
                Forgot Password?
              </Link>
            ) : (
              <div className="AA-pb-40"></div>
            )}
            <button type="submit" className={`AA-custom-btn f-18 fw-400 ${true ? "AA-bg-btn-green-60" : "AA-border-btn AA-bg-btn-gray-15"}`}>
              {action === "login" ? "Login" : "Sign Up"}
            </button>
            <Link className="AA-custom-btn f-18 fw-400 AA-custom-btn AA-border-btn AA-bg-btn-gray-15 AA-a-btn-white" to={action === "login" ? "/signUp" : "/login"}>
              {action === "login" ? "Sign Up" : "Login"}
            </Link>
            <div className="AA-continue-p f-18">
              <p>Or Continue with</p>
            </div>
            <div className="AA-social-login-btns">
              {SocialLoginData.map((item, index) => (
                <IconGradient key={index}
                  button={true}
                  img={item.img}
                />
              ))}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
