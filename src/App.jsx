import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Careers from "./Pages/Careers/Careers";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Security from "./Pages/Security/Security";
import SignUp from "./Pages/SignUp/SignUp";
import "./App.css";
import NavBarComponent from "./Components/NavBarComponent/NavBarComponent";
import HandleLoadingComponent from './Components/HandleLoadingComponent/HandleLoadingComponent';
import FooterComponent from "./Components/FooterComponent/FooterComponent";
import Cursor from "./Components/cursor/cursor";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GiftComponent from "./Components/GiftComponent/GiftComponent";

function App() {
  const [isNewUser, setIsNewUser] = useState(false);
  useEffect(() => {
    const newUser = JSON.parse(localStorage.getItem("isNewUser")) === true;
    setIsNewUser(newUser);

    // if (newUser) {
    //   localStorage.setItem("isNewUser", "false");
    // }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      distance: '50px',
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div className="bg-main">
      <Cursor />
      <NavBarComponent />
      <Routes>
        <Route path='/YourBank/' element={<HandleLoadingComponent />}>
          <Route index element={<Home />} />
          <Route path="/YourBank/about" element={<About />} />
          <Route path="/YourBank/careers" element={<Careers />} />
          <Route path="/YourBank/security" element={<Security />} />
          <Route path="/YourBank/login" element={<Login />} />
          <Route path="/YourBank/signUp" element={<SignUp />} />
        </Route>
      </Routes>
      {isNewUser && <GiftComponent />}
      <FooterComponent />
    </div>
  );
}

export default App;
