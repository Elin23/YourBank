import React, { useState } from "react";
import FAQCardComponent from "../FAQCardComponent/FAQCardComponent";
import "./FAQSectionComponent.css";
import {
  FAQCardData,
  FAQCardData2,
  FAQCardData4,
  FAQCardData3,
} from "./../../Data/FAQCardData";

export default function FAQSectionComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleFAQs = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="MR-FAQ-card-container px-162 pb-150">
        <div className="MR-Upper-FAQ-Card">
          {FAQCardData.map((data, index) => (
            <FAQCardComponent
              key={index}
              Qustion={data.Qustion}
              Answer={data.Answer}
            />
          ))}
        </div>

        <div className="MR-Lower-FAQ-Card">
          {FAQCardData2.map((data, index) => (
            <FAQCardComponent
              key={index}
              Qustion={data.Qustion}
              Answer={data.Answer}
            />
          ))}
        </div>

        {isVisible && (
          <div className="MR-Upper-FAQ-Card">
            {FAQCardData3.map((data, index) => (
              <FAQCardComponent
                key={index}
                Qustion={data.Qustion}
                Answer={data.Answer}
              />
            ))}
          </div>
        )}
        {isVisible && (
          <div className="MR-Lower-FAQ-Card">
            {FAQCardData4.map((data, index) => (
              <FAQCardComponent
                key={index}
                Qustion={data.Qustion}
                Answer={data.Answer}
              />
            ))}
          </div>
        )}
        <button className="MR-FAQ-Button fw-400" onClick={toggleFAQs}>
          {isVisible ? "Hide FAQ's" : "Load All FAQ's"}{" "}
          <img src="./src/assets/imgs/Home icons/Vector 9.png" alt="vector" />
        </button>
      </div>
    </>
  );
}
