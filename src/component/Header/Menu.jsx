import React from "react";
import { Link } from "react-router-dom";
import styles from "../Header/Menu.module.css";
import { VscChromeClose } from "react-icons/vsc";

const Menu = ({ visible, setVisible }) => {
  return (
    <>
      {visible && (
        <div className=" fixed top-0 left-0 bg-white w-full max-w-screen-2xl h-auto z-50 ">
          <div>
            <VscChromeClose
              onClick={() => {
                setVisible(!visible);
              }}
              className={styles.btn}
            />
          </div>
          <ul className="flex flex-col items-center text-xl font-lato w-3/4 mx-auto h-56 my-auto justify-center">
            <Link to="/">
              <li className={styles.list}>Home</li>
            </Link>
            <Link to="/products">
              <li className={styles.list}>Clothes</li>
            </Link>
            <Link to="/products/acc">
              <li className={styles.list}>Accessories</li>
            </Link>
            <Link to="/products/shoes">
              <li className={styles.list}>Shoes</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
