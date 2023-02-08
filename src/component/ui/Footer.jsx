import React from "react";
import icon1 from "../../accet/images/icon1.png";
import icon2 from "../../accet/images/icon2.png";
import icon3 from "../../accet/images/icon3.png";
import icon4 from "../../accet/images/icon4.png";
import styles from "../ui/Footer.module.css";
import { BsFillPhoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-footerbg  h-36  w-full mt-16">
      <div className="flex justify-between items-center w-full h-full mx-auto px-4 md:px-36">
        <div>
          <span className="font-en text-white font-normal text-sm md:text-lg">Copyright &copy; 2023.GI HWAN KWON</span>
        </div>
        <ul className={styles.ul}>
          <li className={styles.list}>
            <a className={styles.link} href="#">
              <img className={styles.img} src={icon1} alt="" />
            </a>
          </li>
          <li className={styles.list}>
            <a className={styles.link} href="#">
              <img className={styles.img} src={icon2} alt="" />
            </a>
          </li>
          <li className={styles.list}>
            <a className={styles.link} href="#">
              <img className={styles.img} src={icon3} alt="" />
            </a>
          </li>
          <li className={styles.list}>
            <a className={styles.link} href="#">
              <img className={styles.img} src={icon4} alt="" />
            </a>
          </li>
        </ul>
        <div className="flex justify-center items-center">
          <BsFillPhoneFill className="text-white" />
          <span className="ml-2 font-en text-sm md:text-xl text-white">010 - 2529 -2232</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
