import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const NewSwiper = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={5} onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default NewSwiper;
