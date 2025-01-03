import React from 'react'
import image from "./../../assets/imgs/TestimonialsIcons/Icon.png"
import './TestimonialsCardComponent.css'

export default function TestimonialsCardComponent({data}) {
  return (
    <>
        <div className="AA-left-shadow-card" />
        <div className="AA-Testimony-Card" data-aos="zoom-in">

            <div className="AA-pb-50">
              <img src={image} alt="icon"/>
            </div>
            <p className="f-18 fw-400 AA-pb-50 AA-m-0">{data.opinion}</p>
            <span className="f-18 fw-500">{data.userName}</span>
        </div>
        <div className="AA-right-shadow-card" />
      </>

  )
}

