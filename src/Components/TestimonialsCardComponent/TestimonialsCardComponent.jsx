import React from 'react'
import './TestimonialsCardComponent.css'

export default function TestimonialsCardComponent({data}) {
  return (
    <div className="AA-Testimony-Card">
        <div className="AA-pb-50">
          <img src={data.image} alt="icon"/>
        </div>
        <p className="f-18 fw-400 AA-pb-50 AA-m-0">{data.opinion}</p>
        <span className="f-18 fw-500">{data.userName}</span>
    </div>
  )
}

