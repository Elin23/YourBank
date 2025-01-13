//This Component handles the loading process,it displays the loader until all the data is loaded.
import React from 'react'
import { useState , useEffect } from 'react';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import { Outlet } from 'react-router-dom';
export default function HandleLoadingComponent() {
        const [loading, setLoading] = useState(true);
        useEffect(() => {
        const handleLoad = () => { 
            setTimeout(() => {
                setLoading(false); 
            }, 1000);
            };
            if (document.readyState === 'complete') {
            handleLoad(); 
            } else {
                window.addEventListener('load', handleLoad);
                return () => window.removeEventListener('load', handleLoad); }
        }, 
[]); 
return (
    <>
        {loading && <LoaderComponent />} 
        <div>
            <Outlet /> 
        </div>
    </>
)
}