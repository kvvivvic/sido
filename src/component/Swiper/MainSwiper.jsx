// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, EffectFade, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../Swiper/MainSwiper.css";

import image1 from "../../accet/images/slide1.jpg";

const MainSwiper = () => {
  SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, A11y]}
      effect={"fade"}
      spaceBetween={0} //
      slidesPerView={1}
      loop={true}
      autoplay={true}
      pagination={{ clickable: true }}
      mousewheel={true}
    >
      <SwiperSlide>
        <div className="w-6/12">
          <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80" alt="" />
        </div>
        <div className="w-6/12">
          <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80" alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1536314360972-f52b0947329e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSwiper;
