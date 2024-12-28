import React from 'react'
import './CustomButtonComponent.css'

export default function CustomButtonComponent({title,IsColor}) {
  return (
    <button className={`AA-custom-btn f-18 fw-400 ${IsColor ? "AA-bg-btn-green-60" : "AA-border-btn AA-bg-btn-gray-15"}`}>
        {title}
    </button>
  )
}
