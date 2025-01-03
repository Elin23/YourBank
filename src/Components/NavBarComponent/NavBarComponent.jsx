import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo1 from "./../../assets/imgs/logo.png";
import logo2 from "./../../assets/imgs/YourBanK.svg";
import "./NavBarComponent.css";
import { useState } from "react";

export default function NavBarComponent() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const StoredUser = JSON.parse(localStorage.getItem('user'));
    if (StoredUser) {
      setIsLogin(true);
      setUserName(StoredUser.firstName + " " + StoredUser.lastName);
    }
  },[navigate]);

  const activeNavBtn = () => {
    setActiveBtn(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = (event) => {
    localStorage.removeItem('user');
    setIsLogin(false);
  };

  return (
    <>
      <nav className={`${scrolling ? "scrolled" : ""}`}>
        <Link to="/" className="JS-logo">
          <img src={logo1} alt="logo" className="js-logo-img" />
          <img src={logo2} alt="logo" className="js-yourbank" />
        </Link>
        <div className="js-menu">
          <input id="checkbox" type="checkbox" onClick={() => setMenuOpen(prev => !prev)} />
          <label className="ES-toggle" htmlFor="checkbox">
            <div id="bar3" className="ES-bars"></div>
            <div id="bar3" className="ES-bars"></div>
            <div id="bar1" className="ES-bars"></div>
          </label>
        </div>
        <div className={`nav-container ${menuOpen ? "open" : ""}`}>
          <ul>
            {[
              { name: "Home", path: "/" },
              { name: "Careers", path: "/careers" },
              { name: "About", path: "/about" },
              { name: "Security", path: "/security" }
            ].map((item, index) => (
              <li key={index} className="f-18">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active-link" : "")} >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="et-nav-btns">
            {
              isLogin == false ? 
              <>
                <Link
              to={"/signup"}
              className={`f-18 ${activeBtn ? "et-bg-green" : "et-white"}`}
                  onClick={() => setActiveBtn(!activeBtn)}
            >
              Sign up
            </Link>
                <Link
                  to={"/login"}
              className={`f-18 ${activeBtn ? "et-white" : "et-bg-green"}`}
                  onClick={() => setActiveBtn(!activeBtn)}>
                Login
                </Link>
              </> : 
              <>
                <Link className={`f-18 et-white`}> {/* link for open account page for user in future */}
                    {userName}
                </Link>
                <Link className={`f-18 et-bg-green`} onClick={handleLogout}>
                  Logout
                </Link>
              </>
            }
            
          </div>

        </div>
      </nav>
    </>
  )
}
