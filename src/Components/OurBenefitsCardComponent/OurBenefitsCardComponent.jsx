import React from 'react'
import './OurBenefitsCardComponent.css'
import blend from './../../assets/imgs/blend.png'
import IconGradient from '../IconGradient/IconGradient'
export default function OurBenefitsCardComponent({ left, data }) {
  return (
    <div className={`hw-OurBenefitsCard p-50 ${left ? 'hw-roundedCardLeft' : 'hw-roundedCardRight'}`} data-aos="flip-left">
      <div className={`hw-gradient-bg ${left ? 'hw-roundedCardLeft' : 'hw-roundedCardRight'}`}></div>
      <img src={blend} className={`hw-OurBenefitsBlendBg  ${left ? 'hw-roundedCardLeft' : 'hw-roundedCardRight'}`} />
      <div className='hw-OurBenefitsCardHeading' >
        <div data-aos="zoom-in" data-aos-delay="200">
          <IconGradient
          button={false}
            img={data.icon}
          />
        </div>
        <h3 className='hw-OurBenefitsCardTitle fw-400 fs-24' data-aos="fade" data-aos-delay="300">{data.title}</h3>
      </div>
      <p className='OurBenefitsCardDescription f-18 fw-300' data-aos="zoom-in" data-aos-delay="300">
        {data.desc}
      </p>
    </div>
  )
}
