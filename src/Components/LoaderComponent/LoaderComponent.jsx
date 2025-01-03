import React from 'react'
import './LoaderComponent.css'
export default function LoaderComponent() {
    return (
    <section className='loaderCOmponent'> 
        <div className="loading-wave">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
        </div>
    </section>
    )
}
