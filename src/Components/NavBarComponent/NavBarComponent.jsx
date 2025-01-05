import React, { useEffect } from 'react'
import { Link, NavLink } from "react-router-dom"
import nav_logo from "../../assets/imgs/nav-logo.png"
import "./NavBarComponent.css"
import { useState } from "react"
import { NavData } from '../../Data/NavData'
import menu from "../../assets/imgs/menu.png"
import { FaXmark } from "react-icons/fa6";

export default function NavBarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);

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
          <img
            src={nav_logo}
            alt="logo"
            className="nav-logo" />
        </Link>
        <div className={`responsive-nav ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={`responsive-logo ${menuOpen ? "responsive-nav-logo" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}>
            <img src={nav_logo} alt="logo" />
          </Link>
          <ul>
            {NavData.map((item, index) => (
              <li
                key={index}
                className="f-18 Af-menu-link">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => setMenuOpen(!menuOpen)} >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="et-nav-btns">
            <Link
              to={"/signup"}
              className={`f-18 ${activeBtn ? "et-bg-green" : ""}`}
              onClick={
                () => (setActiveBtn(!activeBtn),
                  setMenuOpen(!menuOpen))}>
              Sign up
            </Link>
            <Link
              to={"/login"}
              className={`f-18 ${activeBtn ? "" : "et-bg-green"}`}
              onClick={
                () => (setActiveBtn(!activeBtn),
                  setMenuOpen(!menuOpen))}>
              Login
            </Link>
          </div>
          <FaXmark
            className={`close-nav-btn ${menuOpen ? "open-menu" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <img
          src={menu}
          alt="bars icon"
          className="open-nav-btn"
          onClick={() => setMenuOpen(!menuOpen)} />
      </nav >
    </>
  )
}
