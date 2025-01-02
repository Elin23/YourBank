import React from 'react'
import "./ValueCardComponent.css"
export default function ValueCardComponent({data , index}) {
  return (
    <div className='ES-valueCardContainer d-flex justify-content-center flex-column' id={index}>
        <div className="ES-card-title fw-500">{data.title}</div>
        <div className="ES-card-description f-18 fw-300" data-aos="fade-up">{data.description}</div>
    </div>
  )
}
