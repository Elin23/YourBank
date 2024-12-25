import React, { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TestimonialsSectionComponent.css";
import { TestimonialsData } from "../../Data/TestimonialsData";
import TestimonialsCardComponent from "../TestimonialsCardComponent/TestimonialsCardComponent";
import prevImage from "../../assets/imgs/TestimonialsIcons/left-arrow.png";
import nextImage from "../../assets/imgs/TestimonialsIcons/right-arrow.png";

export default function TestimonialsSectionComponent() {
    const [swiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
    swiperRef.slidePrev();
    };

    const nextHandler = () => {
    swiperRef.slideNext();
    };

    return (
    <section className="AA-testimonials-section px-162 pb-150">
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
                            

                    {TestimonialsData.map((e, index) => {
                        return (
                            <SwiperSlide>
                                <TestimonialsCardComponent data={e}></TestimonialsCardComponent>
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
