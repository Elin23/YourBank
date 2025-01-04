import React, { useEffect, useState } from "react";

import "./FormComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import SocialButtonComponent from "../SocialLoginButtonComponent/SocialLoginButtonComponent";
import imgGmail from "../../assets/imgs/login icons/Icon.png";
import imgFacebook from "../../assets/imgs/login icons/Vector.png";
import imgApple from "../../assets/imgs/login icons/Icon (3).png";
import { Link, useNavigate } from "react-router-dom";

export default function FormComponent({ action }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState(action == "login" ? "Login" : "Sign Up");
  const [desc, setDesc] = useState(
    action == "login"
      ? "Welcome back! Please log in to access your account."
      : "Join our community today! Create an account to unlock exclusive features and personalized experiences."
  );

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [icon, setIcon] = useState("show");
  const [type, setType] = useState("password");
  const [messagePass, setMessagePass] = useState("");
  const [message, setMessage] = useState("");
  const [messagefirstName, setMessagefirstName] = useState("");
  const [messagelastName, setMessagelastName] = useState("");

  // password regexthe
  // password is 8 or more characters long ((?=.{8,})),
  // password has at least one uppercase letter ((?=.*[A-Z])),
  // password has at least one lowercase letter ((?=.*[a-z])) and contains at least one digit ((?=.*[0-9])).
  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  // email regex
  const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //name regex
  //Starts with a capital letter
  //At least two letters after the first letter
  const Nameregex = /^[A-Z]([a-zA-Z]{2,40})+$/;

  const handleFirstNameChange = (e) => {
    const {id, value} = e.target;

    setState(prevState => ({
        ...prevState,
        [id] : value
    }));

    if (Nameregex.test(value)) {
      setMessagefirstName("FirstName is valid");
    } else {
      if (value.length > 0) setMessagefirstName("FirstName not valid");
      else setMessagefirstName("");
    }
  };

  const handleLastNameChange = (e) => {
    const {id, value} = e.target;

    setState(prevState => ({
        ...prevState,
        [id] : value
    }));

    if (Nameregex.test(value)) {
      setMessagelastName("LastName is valid");
    } else {
      if (value.length > 0) setMessagelastName("LastName not valid");
      else setMessagelastName("");
    }
  };

  const handlePasswordChange = (e) => {
    const {id, value} = e.target;

    setState(prevState => ({
        ...prevState,
        [id] : value
    }));

    if (action == "signup") {
      if (passwordRegex.test(value)) {
        setMessagePass("Password is valid");
      } else {
        if (value.length > 0)
          setMessagePass(
            "Password must be at least 8 characters long and include both letters and numbers"
          );
        else setMessagePass("");
      }
    }
  };

  const handleEmailChange = (e) => {
    const {id, value} = e.target;

    setState(prevState => ({
        ...prevState,
        [id] : value
    }));

    if (emailregex.test(value)) {
      setMessage("Valid email address");
    } else {
      if (value.length > 0) setMessage("Invalid email address");
      else setMessage("");
    }
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
          emailregex.test(state.email)
        ) {
          //calling api login here
          const userData = {
            userName: "",
            email: state.email,
            token: "api token"
          };
          //save return value from api in local storage 
          localStorage.setItem("isLogin", JSON.stringify(true));
          localStorage.setItem("user", JSON.stringify(userData));
          titleSwal = "You have been logged in successfully";
        }
    } else {
        if (
          state.email.length > 0 &&
          state.password.length > 0 &&
          state.firstName.length > 0 &&
          state.lastName.length > 0 && 
          emailregex.test(state.email) &&
          passwordRegex.test(state.password) && 
          Nameregex.test(state.firstName) && 
          Nameregex.test(state.lastName)
        ) {
          //calling api signup here
          const userData = {
            userName: state.firstName + " " + state.lastName,
            email: state.email,
            token: "api token"
          };
          //save return value from api in local storage 
          localStorage.setItem("isLogin", JSON.stringify(true));
          localStorage.setItem("user", JSON.stringify(userData));
          titleSwal = "An account has been created successfully";
        }
    }

    Swal.fire({
      icon: 'success',
      title: titleSwal,
      showConfirmButton: false,
      timer: 1500
    });

    navigate('/');
  };

  return (
    <section className="AA-form-section AA-px-297 pb-150">
      <div className="AA-form-container">
        <div className="AA-design">
          <img src="../../assets/imgs/Abstract Design4.png" alt="design" />
        </div>
        <div className="overlay">
          <TitleComponent
            title={title}
            desc={desc}
            highlightedWords={[title]}
            fw={false}
          />
          <form onSubmit={submitForm}>
            {action == "signup" ? (
              <div className="AA-inputs AA-input-pb">
                {/* firstName input */}
                <div className="AA-input-Fields AA-input-group">
                  <input
                    id="firstName"
                    className="AA-input f-18 fw-300"
                    placeholder="Enter First Name"
                    value={state.firstName}
                    onChange={handleFirstNameChange}
                    required
                  />
                  <p
                    className={`AA-error ${
                      messagefirstName.length == 0 ? "AA-hide" : "AA-show"
                    }`}
                  >
                    {messagefirstName}
                  </p>
                </div>
                {/* lastName input */}
                <div className="AA-input-Fields AA-input-group">
                  <input
                    id="lastName"
                    className="AA-input f-18 fw-300"
                    placeholder="Enter Last Name"
                    value={state.lastName}
                    onChange={handleLastNameChange}
                    required
                  />
                  <p
                    className={`AA-error ${
                      messagelastName.length == 0 ? "AA-hide" : "AA-show"
                    }`}
                  >
                    {messagelastName}
                  </p>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className="AA-inputs">
              {/* email input */}
              <div className="AA-input-Fields AA-input-group">
                <input
                  id="email"
                  type="email"
                  className="AA-input f-18 fw-300"
                  placeholder="Enter your Email"
                  value={state.email}
                  onChange={handleEmailChange}
                  required
                />
                <p
                  className={`AA-error ${
                    message.length == 0 ? "AA-hide" : "AA-show"
                  }`}
                >
                  {message}
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
                    onChange={handlePasswordChange}
                    required
                  />
                  <span className="AA-icon-pass" onClick={handleToggle}>
                    <i
                      className={`eye-icon ${
                        icon == "show"
                          ? "fa-solid fa-eye"
                          : "fa-regular fa-eye-slash"
                      }`}
                      onClick={handleToggle}
                    ></i>
                  </span>
                </div>
                <p
                  className={`AA-error ${
                    messagePass.length == 0 ? "AA-hide" : "AA-show"
                  }`}
                >
                  {messagePass}
                </p>
              </div>
            </div>
            {action == "login" ? (
              <Link className="AA-forget-pass-btn f-18 fw-400" to="#">
                Forgot Password?
              </Link>
            ) : (
              <div className="AA-pb-40"></div>
            )}

            <button type="submit" className={`AA-custom-btn f-18 fw-400 ${true ? "AA-bg-btn-green-60" : "AA-border-btn AA-bg-btn-gray-15"}`}>
                {action === "login" ? "Login" : "Sign Up"}
            </button>
            <Link className="AA-custom-btn f-18 fw-400 AA-custom-btn AA-border-btn AA-bg-btn-gray-15 AA-a-btn-white" to={`${action === "login" ? "/signUp" : "/login"}`}>
                {action === "login" ? "Sign Up" : "Login"}
            </Link>        
           {/* <CustomButtonComponent title={`${action==="login" ? "Login" : "Sign Up"}`} IsColor={true} />
            <CustomButtonComponent title={`${action==="login" ? "Sign Up" : "Login"}`} IsColor={false}/> */}
            <div className="AA-continue-p">
              <p>Or Continue with</p>
            </div>
            <div className="AA-social-login-btns">
              <SocialButtonComponent img={imgGmail} />
              <SocialButtonComponent img={imgFacebook} />
              <SocialButtonComponent img={imgApple} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
