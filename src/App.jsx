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
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset:0,
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
        <Route path='/' element={<HandleLoadingComponent />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/security" element={<Security />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
