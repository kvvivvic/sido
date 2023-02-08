import React from "react";
import MainSwiper from "../component/Swiper/MainSwiper";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div>
        <MainSwiper />

        <div className={styles.text}>
          <p className="text-8xl font-en tracking-wider ml-3 mr-6 text-white">Si</p>
          <p className="text-8xl font-en tracking-wider ml-12">Do</p>
        </div>
      </div>
    </>
  );
};

export default Home;
