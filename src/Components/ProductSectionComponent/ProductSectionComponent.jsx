import { useState } from "react";
import "./ProductSectionComponent.css";
import "./../../Components/TitleComponent/TitleComponent";
import TitleComponent from "./../../Components/TitleComponent/TitleComponent";
import ProductCardComponent from "../ProductCardComponent/ProductCardComponent";
import { ProductCardData, ProductCardData2 } from "../../Data/ProductCardData";
export default function ProductSectionComponent() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="AM-product-sec mb-150">
      <div className="title-tabs  px-162 title-product">
        <TitleComponent
          titleLeft="Our"
          span="Products"
          titleRight=""
          desc="Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations"
        />
        <div className="tabs">
          <button
            className={
              toggleState === 1 ? "tab fw-400  active-tab" : "tab fw-400"
            }
            onClick={() => toggleTab(1)}
          >
            For Individuals
          </button>
          <button
            className={
              toggleState === 2 ? "tab fw-400 active-tab" : "tab fw-400"
            }
            onClick={() => toggleTab(2)}
          >
            For Businesses
          </button>
        </div>
      </div>
      <div
        className={
          toggleState === 1
            ? "row-cards  active-content  px-162"
            : "row-cards  px-162"
        }
      >
        {ProductCardData.map((e, index) => {
          return <ProductCardComponent key={index} data={e} />;
        })}
      </div>
      <div
        className={
          toggleState === 2
            ? "row-cards  active-content  px-162"
            : "row-cards  px-162"
        }
      >
        {ProductCardData2.map((e, index) => {
          return <ProductCardComponent key={index} data={e} />;
        })}
      </div>
    </section>
  );
}
