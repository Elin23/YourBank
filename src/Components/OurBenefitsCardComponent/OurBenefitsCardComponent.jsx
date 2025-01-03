import React from 'react'
import './OurBenefitsCardComponent.css'
import blend from './../../assets/imgs/blend.png'
export default function OurBenefitsCardComponent({left ,data}) {
  return (
    <div className={`hw-OurBenefitsCard p-50 ${left? 'hw-roundedCardLeft' : 'hw-roundedCardRight'}`} data-aos="flip-left">
        <div className={`hw-gradient-bg ${left? 'hw-roundedCardLeft' : 'hw-roundedCardRight'}`}></div>
        <img src={blend} className={`hw-OurBenefitsBlendBg  ${left? 'hw-roundedCardLeft' : 'hw-roundedCardRight'}`} />
        <div className='hw-OurBenefitsCardHeading'>
            <div className="hw-iconContainer" data-aos="zoom-in" data-aos-delay="200">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <img src={data.icon} className='OurBenefitsCardIcon'/>
            </div>
            <h3 className='hw-OurBenefitsCardTitle fw-400 fs-24' data-aos="fade" data-aos-delay="300">{data.title}</h3>
        </div>
        <p className='OurBenefitsCardDescription f-18 fw-300'data-aos="zoom-in" data-aos-delay="300">
            {data.desc}
        </p>
    </div>
  )
}
