import React from 'react'
import "./OurValuesSectionComponent.css"
import { ValueCardData } from '../../Data/ValueCardData'
import ValueCardComponent from '../ValueCardComponent/ValueCardComponent'

export default function OurValuesSectionComponent() {
  return (
    <div>
        {ValueCardData.map((card, index) => {
            return (
                <ValueCardComponent data={card} key={index} />
            )
        })}
    </div>
  )
}
