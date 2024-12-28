import React from 'react'
import "./OurValuesSectionComponent.css"
import { exportedValueCardData } from '../../Data/ValueCardData'
import ValueCardComponent from '../ValueCardComponent/ValueCardComponent'
import TitleComponent from '../TitleComponent/TitleComponent'

export default function OurValuesSectionComponent() {
  return (
    <div className='pb-150 px-162 ES-our-values'>
      <div className="ES-value-title d-flex align-items-center justify-content-center w-100">
        <TitleComponent
          title="Our Values"
          desc="At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals."
          highlightedWords={["Values"]}
        />
      </div>
      <div className="ES-values-cards-container d-flex align-items-center justify-content-center flex-wrap">
        {exportedValueCardData.map((card, index) => {
          return (
            <ValueCardComponent data={card} key={index} />
          )
        })}
      </div>
    </div>
  )
}
