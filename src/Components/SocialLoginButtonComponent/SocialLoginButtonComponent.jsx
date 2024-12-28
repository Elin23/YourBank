import React from 'react'
import './SocialLoginButtonComponent.css'

export default function SocialButtonComponent({img}) {
  return (
    <div className="AA-container-social-btn">
        <button className="AA-social-btn">
            <img src={img} />
        </button>
    </div>
  )
}
