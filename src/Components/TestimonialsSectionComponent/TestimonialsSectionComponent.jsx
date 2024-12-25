import React, { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TestimonialsSectionComponent.css";
import { TestimonialsData, TestimonialsDataBusiness } from "../../Data/TestimonialsData";
import TestimonialsCardComponent from "../TestimonialsCardComponent/TestimonialsCardComponent";
import prevImage from "../../assets/imgs/TestimonialsIcons/left-arrow.png";
import nextImage from "../../assets/imgs/TestimonialsIcons/right-arrow.png";
import TitleComponent from "../TitleComponent/TitleComponent";

export default function TestimonialsSectionComponent() {
    const [swiperRef, setSwiperRef] = useState(null);
    const [toggleState, setToggleState] = useState(1);

    const prevHandler = () => {
        swiperRef.slidePrev();
    };

    const nextHandler = () => {
        swiperRef.slideNext();
    };

    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    const TestimonialsTabs = [
      { id: 1, label: "For Individuals", data: TestimonialsData },
      { id: 2, label: "For Businesses", data: TestimonialsDataBusiness },
    ];

    const currentTestimonialsData = TestimonialsTabs.find(tab => tab.id === toggleState).data;

    return (
        <section className="AA-testimonials-section px-162 pb-150">
            <div className="title-tabs mb-100">
                <TitleComponent
                    title="Our Testimonials"
                    desc="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"
                    highlightedWords={["Testimonials"]}
                />
                <div className="tabs">
                    {TestimonialsTabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab fw-400 ${toggleState === tab.id ? "active-tab" : ""
                                }`}
                            onClick={() => toggleTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="wrapper">
                <div className="AA-left-shadow" />
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    slidesPerView={3}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        993: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                    onSwiper={(swiper) => setSwiperRef(swiper)}
                    className=""
                >


                    {currentTestimonialsData.map((e, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <TestimonialsCardComponent data={e}/>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>
                <div className="AA-right-shadow" />
            </div>
            <div className="AA-navigation-btns px-162">
                <div>
                    <button
                        className="AA-custom-swiper-navigation-prev"
                        onClick={prevHandler}>
                        <img src={prevImage} alt="prev" />
                    </button>
                </div>
                <div>
                    <button
                        className="AA-custom-swiper-navigation-next"
                        onClick={nextHandler}>
                        <img src={nextImage} alt="next" />
                    </button>
                </div>
            </div>
        </section>
    );
}
