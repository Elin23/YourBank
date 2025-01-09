import React, { useState } from "react";
import FAQCardComponent from "../FAQCardComponent/FAQCardComponent";
import "./FAQSectionComponent.css";
import { exportedFAQCardData } from "./../../Data/FAQCardData";
import TitleComponent from "../TitleComponent/TitleComponent";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function FAQSectionComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleFAQs = () => {
    setIsVisible((prevState) => !prevState);
  };

  const upperFAQs = exportedFAQCardData.slice(0, 2);
  const lowerFAQs = exportedFAQCardData.slice(2, 4);

  const renderFAQCards = (faqs) => {
    return faqs.map((data, index) => (
      <FAQCardComponent
        key={index}
        Qustion={data.Qustion}
        Answer={data.Answer}
      />
    ));
  };

  return (
    <div className="MR-FAQ-section-container px-162 pb-150">
      <TitleComponent
        title="Frequently Asked Questions"
        desc="Still you have any questions? Contact our Team via support@yourbank.com"
        highlightedWords={["Frequently"]}
        fw={false}
      />

      <div className="MR-FAQ-card-container">
        <div className={`${isVisible ? "MR-FAQ-ExpandedgGap" : ""}`}>
          <div>
            {/* upper FAQs Cards*/}
            <div className="MR-Upper-FAQ-Card ">
              {renderFAQCards(upperFAQs)}
            </div>

            {/* Lower FAQs Cards*/}
            <div
              className={`MR-Lower-FAQ-Card ${
                !isVisible ? "MR-FAQ-Gradient1" : ""
              }`}
            >
              {renderFAQCards(lowerFAQs)}
            </div>
          </div>

          <div>
            {/* Hidden Card*/}
            {isVisible && (
              <>
                <div className="MR-Upper-FAQ-Card">
                  {renderFAQCards(upperFAQs)}
                </div>

                <div
                  className={`MR-Lower-FAQ-Card ${
                    isVisible ? "MR-FAQ-Gradient1" : ""
                  }`}
                >
                  {renderFAQCards(lowerFAQs)}
                </div>
              </>
            )}
          </div>
        </div>
        <button className="MR-FAQ-Button f-18 fw-400" onClick={toggleFAQs}>
          {isVisible ? "Hide FAQ's " : "Load All FAQ's "}

              {isVisible
                ? <MdKeyboardArrowUp className="MR-FAQ-Arrow-Button" />
                : <MdKeyboardArrowDown className="MR-FAQ-Arrow-Button" />}

        </button>
      </div>
    </div>
  );
}
