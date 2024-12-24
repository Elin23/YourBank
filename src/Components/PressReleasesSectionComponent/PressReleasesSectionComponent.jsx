import React from 'react'
import "./PressReleasesSectionComponent.css"
import PressCardComponent from '../PressCardComponent/PressCardComponent'
import { PressCardData } from '../../Data/PressCardData'

export default function PressReleasesSectionComponent() {
  return (
    <section className="press-releases px-162 pb-150">
      <div className="press-cards">
        {PressCardData.map((e, index) => {
          return (
            <PressCardComponent key={index}
              image={e.image}
              title={e.title}
              location={e.location}
              date={e.date}
              desc={e.desc}
            />
          )
        })}
      </div>
    </section>
  )
}
