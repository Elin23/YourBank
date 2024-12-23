import React, { useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import logo1 from "./../../assets/imgs/logo.png";
import logo2 from "./../../assets/imgs/YourBanK.svg";
import menu from "./../../assets/imgs/menue.png";
import "./NavBarComponent.css";
import { useState } from "react";

export default function NavBarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${scrolling ? "scrolled" : ""}`}>
        <Link to="/" className="JS-logo">
          <img src={logo1} alt="logo" className="js-logo-img" />
          <img src={logo2} alt="logo" className="js-yourbank" />
        </Link>
        <div className="js-menu">
          {/* <img src={menu} alt="menu" /> */}
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
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="JS-right-nav">
            <button className="js-btn1-nav f-18">
              <Link to="/signUp">Sign Up</Link>
            </button>
            <button className="js-btn2-nav f-18">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
