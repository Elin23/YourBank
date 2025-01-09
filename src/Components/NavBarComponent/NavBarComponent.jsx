import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import nav_logo from "../../assets/imgs/nav-logo.png";
import "./NavBarComponent.css";
import { useState } from "react";
import { NavData } from "../../Data/NavData";
import menu from "../../assets/imgs/menu.png";
import { FaXmark } from "react-icons/fa6";

export default function NavBarComponent() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [activeBtn, setActiveBtn] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [userName, setUserName] = useState(""); // add
  

  useEffect(() => {
    const StoredUser = JSON.parse(localStorage.getItem("user"));
    if (StoredUser) {
      setIsLogin(true);
      setUserName(StoredUser.userName); // add
      console.log(userName);
    } else {
      setUserName("");
    }
  }, [navigate]);

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
    Swal.fire({
      icon: 'question',
      title: " Are you sure you want to log out?",
      showCancelButton: true,
      confirmButtonText: "Logout",
      denyButtonText: `Cancel`
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        localStorage.setItem("isLogin", false);
        setIsLogin(false);
        window.dispatchEvent(new Event('loginStatusChanged'));

        setUserName(""); //add
      }
    });
  };

  return (
    <>
      <nav className={`${scrolling ? "scrolled" : ""}`}>
        <Link to="/YourBank/" className="JS-logo">
          <img
            src={nav_logo}
            alt="logo"
            className="nav-logo" />
        </Link>
        <div className={`responsive-nav ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={`responsive-logo ${menuOpen ? "responsive-nav-logo" : ""
              }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={nav_logo} alt="logo" />
          </Link>
          <ul>
            {NavData.map((item, index) => (
              <li
                key={index}
                className="f-18 Af-menu-link">
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="et-nav-btns">
            {isLogin == false ? (
              <>
                <Link
                  to={"/YourBank/signup"}
                  className={`f-18 ${activeBtn ? "et-bg-green" : ""}`}
                  onClick={() => (setActiveBtn(!activeBtn), setMenuOpen(!menuOpen))}>
                  Sign up
                </Link>
                <Link
                  to={"/YourBank/login"}
                  className={`f-18 ${activeBtn ? "" : "et-bg-green"}`}
                  onClick={() => (setActiveBtn(!activeBtn), setMenuOpen(!menuOpen))}>
                  Login
                </Link>
              </>
            ) : (
              <>
                {/* add*/}
                <span className="user-name f-18">{userName}</span>
                <Link className={`f-18 et-bg-green`} onClick={handleLogout}>
                  Logout
                </Link>
              </>
            )}
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
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </nav>
    </>
  );
}
