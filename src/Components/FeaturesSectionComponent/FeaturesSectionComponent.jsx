import { useState } from "react"
import "./FeaturesSectionComponent.css"
import FeaturesCardComponent from "../FeaturesCardComponent/FeaturesCardComponent"
import TitleComponent from "../TitleComponent/TitleComponent"
import { exportedFeaturesCardData } from "../../Data/FeaturesCardData"

export default function FeaturesSectionComponent() {
  const btns = [
    {
      filter: "Online Banking",
      txt: "Online Banking"
    },
    {
      filter: "Financial Tools",
      txt: "Financial Tools"
    },
    {
      filter: "Customer Support",
      txt: "Customer Support"
    }
  ]
  const [activeBtn, setActiveBtn] = useState("Online Banking")

  function activeTab(filter) {
    setActiveBtn(filter)
  }

  return (
    <section className="features px-162 pb-150">

      <div className="features-title mb-80">
        <TitleComponent
          title="Our Features"
          desc="Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience"
          highlightedWords={["Features"]}
        />
      </div>

      <div className="features-content">
        <div className="et-btns p-50">
          {btns.map((btn, index) => {
            return (
              <button key={index}
                className={`fw-400 f-18 ${activeBtn == btn.filter ? "et-active-btn" : "et-btn"}`}
                onClick={() => activeTab(btn.filter)}>
                {btn.txt}
              </button>
            )
          })}
        </div>

        <div className="features-cards">
          {exportedFeaturesCardData.map((e) => {
            if (activeBtn == e.filter) {
              return (
                e.btn.map((b, index) => {
                  return (
                    <FeaturesCardComponent key={index}
                      title={b.title}
                      img={b.img}
                      content={b.content}
                    />
                  )
                }
                )
              )
            }
          })}
        </div>

      </div>
    </section>
  )
}
