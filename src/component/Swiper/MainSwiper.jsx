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
import styles from "../Swiper/MainSwiper.module.css";

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
          <img className="w-full" src="https://images.unsplash.com/photo-1533734640-1e555dd1f5cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2302&q=80" alt="" />
        </div>
        <ul className="w-6/12 relative">
          <li className={styles.list1}>
            <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2373&q=80" alt="" />
          </li>
          <li className={styles.list2}>
            <img src="https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
          </li>
          <li className={styles.list3}>
            <img src="https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
          </li>
        </ul>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-6/12">
          <img className="w-full" src="https://images.unsplash.com/photo-1508853363419-a9263d752c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="" />
        </div>
        <ul className="w-6/12 relative">
          <li className={styles.list1}>
            <img src="https://images.unsplash.com/photo-1612731486606-2614b4d74921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2320&q=80" alt="" />
          </li>
          <li className={styles.list2}>
            <img src="https://images.unsplash.com/photo-1608748010899-18f300247112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3164&q=80" alt="" />
          </li>
          <li className={styles.list3}>
            <img src="https://images.unsplash.com/photo-1596993100471-c3905dafa78e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
          </li>
        </ul>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-6/12">
          <img className="w-full" src="https://images.unsplash.com/photo-1571867424485-369464ed33cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="" />
        </div>
        <ul className="w-6/12 relative">
          <li className={styles.list1}>
            <img src="https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
          </li>
          <li className={styles.list2}>
            <img src="https://images.unsplash.com/photo-1625204614387-6509254d5b02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="" />
          </li>
          <li className={styles.list3}>
            <img src="https://images.unsplash.com/photo-1611824204322-24963b44d68b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
          </li>
        </ul>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-6/12">
          <img className="w-full" src="https://images.unsplash.com/photo-1506620195489-7839a134b1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="" />
        </div>
        <ul className="w-6/12 relative">
          <li className={styles.list1}>
            <img src="https://images.unsplash.com/photo-1538330627166-33d1908c210d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80" alt="" />
          </li>
          <li className={styles.list2}>
            <img src="https://images.unsplash.com/photo-1612215327100-60fc5c4d7938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" alt="" />
          </li>
          <li className={styles.list3}>
            <img src="https://images.unsplash.com/photo-1512068549487-5e79d74c7fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" />
          </li>
        </ul>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSwiper;
