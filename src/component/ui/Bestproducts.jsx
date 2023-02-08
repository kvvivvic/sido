import React from "react";
import NewSwiper from "../Swiper/NewSwiper";
import styles from "../ui/BestProducts.module.css";

const Bestproducts = () => {
  return (
    <section>
      <div className="my-12">
        <h3 className={styles.title}>Best Products</h3>
      </div>
      <NewSwiper />
    </section>
  );
};

export default Bestproducts;
