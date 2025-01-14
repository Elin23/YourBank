import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./HowWeProtectComponent.css";
import OurBenefitsCardComponent from "../OurBenefitsCardComponent/OurBenefitsCardComponent";
import { exportedHowWeProtectData } from "./../../Data/HowWeProtectDATA";
export default function HowWeProtectComponent() {
  const renderBenefitsCards = () => {
    return exportedHowWeProtectData.map((data, index) => (
      <OurBenefitsCardComponent key={index} data={data} />
    ));
  };
  return (
    <section className="HowWeProtectComponent px-162 pb-150">
      <TitleComponent
        title={"How We Protect You"}
        desc={
          "At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times"
        }
        highlightedWords={["Protect You"]}
        fw={true}
      />
      <div className="HW-howWeProtectYouContainer">
        <div className="howWeProtectBG">
          <div className="hwHowWeProtectGradient"></div>
          <div className="hw-HowWeBlendBG"></div>
        </div>
        <div className="howWeProtectCardsContainer">
          <div className="howProtectRow">
            {renderBenefitsCards().slice(0, 2)}
          </div>
          <div className="howProtectRow">
            {renderBenefitsCards().slice(2, 4)}
          </div>
        </div>
      </div>
    </section>
  );
}