import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
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
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import GiftComponent from './Components/GiftComponent/GiftComponent';

function App() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loader after 2 seconds
      AOS.init({
        duration: 1000,
        offset: 0,
        once: false,
        mirror: false,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Retrieve new user status from local storage
    const storedStatus = JSON.parse(localStorage.getItem('isNewUser'));
    setIsNewUser(storedStatus);

    // Retrieve visibility state from local storage
    const visibleState = JSON.parse(localStorage.getItem('isVisible'));
    setIsVisible(visibleState);

    // Function to handle status changes
    const handleStatusChange = () => {
      // Update new user status
      const updatedStatus = JSON.parse(localStorage.getItem('isNewUser'));
      setIsNewUser(updatedStatus);

      // Update visibility state
      const updateVisibleState = JSON.parse(localStorage.getItem('isVisible'));
      setIsVisible(updateVisibleState);
    };

    // Add event listeners for status changes
    window.addEventListener('StatusChanged', handleStatusChange);
    window.addEventListener('StatusVisibleChanged', handleStatusChange);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('StatusChanged', handleStatusChange);
      window.removeEventListener('StatusVisibleChanged', handleStatusChange);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    // Refresh AOS animations on route change
    AOS.refresh();
  }, [location]);

  return (
    <div className="bg-main">
      <Cursor />
      <ScrollToTop />
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<HandleLoadingComponent />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/security" element={<Security />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
      {isNewUser && isVisible && <GiftComponent />}
      <FooterComponent />
    </div>
  );
}

export default App;
