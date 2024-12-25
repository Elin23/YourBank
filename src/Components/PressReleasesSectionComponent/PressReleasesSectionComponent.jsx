import React from 'react'
import "./PressReleasesSectionComponent.css"
import PressCardComponent from '../PressCardComponent/PressCardComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import { exportedPressCardData } from '../../Data/PressCardData'

export default function PressReleasesSectionComponent() {
  return (
    <section className="press-releases px-162 pb-150">

      <div className="press-title mb-80">
        <TitleComponent
          title="Press Releases"
          desc="Stay updated with the latest happenings and exciting developments at YourBank through our press releases."
          highlightedWords={["Press Releases"]}
        />
      </div>

      <div className="press-cards">
        {exportedPressCardData.map((e, index) => {
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
