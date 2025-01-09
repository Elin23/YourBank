import React, { useState } from "react";
import "./ScrollToTop.css";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.onscroll = handleScroll;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`MR-scroll-to-top ${isVisible ? "MR-Scroll-show" : ""}`}
    >
      <FaArrowUp className="MR-ScrollArrow" />
    </button>
  );
}
