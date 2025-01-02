import './SocialFooterComponent.css';
import React from 'react';

export default function SocialFooterComponent({ icons }) {
    return (
        <div className="hw-footerIcons">
            {icons.map((icon, index) => (
                <div className="hw-fotIconConta" key={index} data-aos="flip-right">
                    <img src={icon.src} alt={icon.alt} />
                </div>
            ))}
        </div>
    );
}
