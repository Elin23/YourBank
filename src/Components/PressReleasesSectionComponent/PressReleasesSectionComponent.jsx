import React from 'react'
import "./PressReleasesSectionComponent.css"
import PressCardComponent from '../PressCardComponent/PressCardComponent'
import { PressCardData } from '../../Data/PressCardData'
import TitleComponent from '../TitleComponent/TitleComponent'

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
