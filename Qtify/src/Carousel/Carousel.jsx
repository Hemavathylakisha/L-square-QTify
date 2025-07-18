

// Carousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css"; // You can define custom styles here

const Carousel = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={16}
      navigation
      breakpoints={{
        0: { slidesPerView: 1.3 },
        600: { slidesPerView: 2.3 },
        960: { slidesPerView: 3.5 },
        1280: { slidesPerView: 5 },
        1536: { slidesPerView: 6 },
      }}
    >
      {children.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
