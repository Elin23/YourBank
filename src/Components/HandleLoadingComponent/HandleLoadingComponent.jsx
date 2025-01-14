import React from "react";
import { useState, useEffect } from "react";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import { Outlet } from "react-router-dom";
import AOS from "aos";
export default function HandleLoadingComponent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {}, 1000);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  return (
    <>
      {loading && <LoaderComponent />}
      <div>
        <Outlet />
      </div>
    </>
  );
}
