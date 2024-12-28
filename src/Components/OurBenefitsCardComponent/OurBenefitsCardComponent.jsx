import React from 'react'
import './OurBenefitsCardComponent.css'
import blend from './../../assets/imgs/blend.png'
export default function OurBenefitsCardComponent({left ,data}) {
  return (
    <div className={`hw-OurBenefitsCard ${left? 'hw-roundedCardLeft' : 'hw-roundedCardRight'}`}>
        <div className={`hw-gradient-bg ${left? 'hw-roundedCardLeft' : 'hw-roundedCardRight'}`}></div>
        <img src={blend} className={`hw-OurBenefitsBlendBg  ${left? 'hw-roundedCardLeft' : 'hw-roundedCardRight'}`} />
        <div className='hw-OurBenefitsCardHeading'>
            <div className="hw-iconContainer">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <img src={data.icon} className='OurBenefitsCardIcon'/>
            </div>
            <h3 className='hw-OurBenefitsCardTitle'>{data.title}</h3>
        </div>
        <p className='OurBenefitsCardDescription'>
            {data.desc}
        </p>
    </div>
  )
}
