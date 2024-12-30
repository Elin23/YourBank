import React from 'react'
import './HeroComponent2.css'
import TitleComponent from '../TitleComponent/TitleComponent'
export default function HeroComponent2({ image, head, disc, light }) {
    return (
      <>
        <div className=" pb-150 Af-HeroComponent2-father">
          <div className=" Af-HeroComponent2">
            <div className="Af-HeroComponent2-heading">
              <TitleComponent
                title={head}
                desc={disc}
                highlightedWords={[light]}
                fw={false}
              />
            </div>
            <img src={image} alt="HeroImg" />
          </div>
        </div>
      </>
    );
}
