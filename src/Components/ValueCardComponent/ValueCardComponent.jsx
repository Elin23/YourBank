import React from 'react'
import "./ValueCardComponent.css"
export default function ValueCardComponent({key, data}) {
  return (
    <div className='ES-valueCardContainer' id={key}>
        <div className="ES-card-title">{data.title}</div>
        <div className="ES-card-description">{data.description}</div>
    </div>
  )
}
