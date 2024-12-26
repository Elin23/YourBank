import React, { useState } from "react";
import FAQCardComponent from "../FAQCardComponent/FAQCardComponent";
import "./FAQSectionComponent.css";
import { exportedFAQCardData } from "./../../Data/FAQCardData";
import TitleComponent from "../TitleComponent/TitleComponent";

export default function FAQSectionComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleFAQs = () => {
    setIsVisible((prevState) => !prevState);
  };

  const upperFAQs = exportedFAQCardData.slice(0, 2);
  const lowerFAQs = exportedFAQCardData.slice(2, 4);

  return (
    <div className="MR-FAQ-section-container px-162 pb-150">
      <TitleComponent
        title="Frequently Asked Questions"
        desc="Still you have any questions? Contact our Team via support@yourbank.com"
        highlightedWords={["Frequently"]}
      />

      <div className="MR-FAQ-card-container">
        {/* upper FAQs Cards*/}
        <div className="MR-Upper-FAQ-Card">
          {upperFAQs.map((data, index) => (
            <FAQCardComponent
              key={index}
              Qustion={data.Qustion}
              Answer={data.Answer}
            />
          ))}
        </div>

        {/* Lower FAQs Cards*/}
        <div
          className={`MR-Lower-FAQ-Card ${
            !isVisible ? "MR-FAQ-Gradient1" : ""
          }`}
        >
          {lowerFAQs.map((data, index) => (
            <FAQCardComponent
              key={index}
              Qustion={data.Qustion}
              Answer={data.Answer}
            />
          ))}
        </div>

        {/* Hidden Card*/}
        {isVisible && (
          <>
            {/* upper FAQs Cards*/}
            <div className="MR-Upper-FAQ-Card">
              {upperFAQs.map((data, index) => (
                <FAQCardComponent
                  key={index}
                  Qustion={data.Qustion}
                  Answer={data.Answer}
                />
              ))}
            </div>

            {/* Lower FAQs Cards*/}
            <div
              className={`MR-Lower-FAQ-Card ${
                isVisible ? "MR-FAQ-Gradient1" : ""
              }`}
            >
              {lowerFAQs.map((data, index) => (
                <FAQCardComponent
                  key={index}
                  Qustion={data.Qustion}
                  Answer={data.Answer}
                />
              ))}
            </div>
          </>
        )}

        <button className="MR-FAQ-Button fw-400" onClick={toggleFAQs}>
          {isVisible ? "Hide FAQ's " : "Load All FAQ's "}
          <img
            src={
              isVisible
                ? "./src/assets/imgs/Home icons/Vector 10.png"
                : "./src/assets/imgs/Home icons/Vector 9.png"
            }
            alt="vector"
          />
        </button>
      </div>
    </div>
  );
}
