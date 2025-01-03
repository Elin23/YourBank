import React from 'react'
import './OurBenefitsSectionComponenet.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import OurBenefitsCardComponent from '../OurBenefitsCardComponent/OurBenefitsCardComponent'
import {exportedData} from './../../Data/OurBenefitsCardData'
export default function OurBenefitsSectionComponenet() {
  return (
    <section className="HW-OurBenefitsComponent px-162 pb-150">
      <div className="title-head">
        <TitleComponent
          title={"Our Benefits"}
          desc={
            "At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."
          }
          highlightedWords={["Benefits"]}
          fw={false}
        />
      </div>
      <div className="HW-OurBenefitsCardsContainer">
        <div className="hw-OurBenefitsCardsRow">
          <OurBenefitsCardComponent left={true} data={exportedData[0]} />
          <span className="hw-dashed-lines-vr"></span>
          <OurBenefitsCardComponent left={false} data={exportedData[1]} />
        </div>
        <span className="hw-dashed-lines-hr"></span>
        <div className="hw-OurBenefitsCardsRow">
          <OurBenefitsCardComponent left={false} data={exportedData[2]} />
          <span className="hw-dashed-lines-vr"></span>
          <OurBenefitsCardComponent left={true} data={exportedData[3]} />
        </div>
      </div>
    </section>
  );
}
