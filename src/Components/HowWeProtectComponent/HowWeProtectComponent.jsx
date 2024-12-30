import React from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import './HowWeProtectComponent.css'
import OurBenefitsCardComponent from '../OurBenefitsCardComponent/OurBenefitsCardComponent'
import {exportedHowWeProtectData} from './../../Data/HowWeProtectDATA'
// import blend from './../../assets/imgs/blend.png'
export default function HowWeProtectComponent() {
  return (
    <section className='HowWeProtectComponent px-162 pb-150'>
        <TitleComponent 
        title={'How We Protect You'}
        desc={'At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times'}
        highlightedWords={['Protect You']}
        />
        <div className="HW-howWeProtectYouContainer">
            <div className="howWeProtectBG">
                <div className="hwHowWEprotectGradient"></div>
                <div className="hw-HowWeBlendBG" ></div>
            </div>
            <div className="howWeProtctCardsContainer">
                <div className="howProtectRow">
                    <OurBenefitsCardComponent data={exportedHowWeProtectData[0]}/>
                    <OurBenefitsCardComponent data={exportedHowWeProtectData[1]}/>
                </div>
                <div className="howProtectRow">
                    <OurBenefitsCardComponent data={exportedHowWeProtectData[2]}/>
                    <OurBenefitsCardComponent data={exportedHowWeProtectData[3]}/>
                </div>
            </div>
        </div>
    </section>
  )
}
