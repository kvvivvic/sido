import React from "react";
import Button from "../Button/Button";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.user_menu}>
          <Link to="/">
            <h1 className="text-4xl font-en hover:text-indigo-400 p-2 mr-6 my-1 font-normal">sido.</h1>
          </Link>
          <ul className={styles.ul}>
            <Link to="/">
              <li className={styles.li}>Home</li>
            </Link>
            <Link to="/products/clothes">
              <li className={styles.li}>Clothes</li>
            </Link>
            <Link to="/products/acc">
              <li className={styles.li}>Accessories</li>
            </Link>
            <Link to="/products/shoes">
              <li className={styles.li}>Shoes</li>
            </Link>
          </ul>
        </div>
        <div className={styles.user_login}>
          <button className={styles.login}>LOGIN</button>
          <Link to="/carts">
            <AiOutlineShopping />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
