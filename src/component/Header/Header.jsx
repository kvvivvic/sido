import React, { useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";
import User from "../User/User";
import { useAuthContext } from "../../context/AuthContext";
import CartStatus from "../Cart/CartStatus";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, login, logout } = useAuthContext();
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.user_menu}>
          <Link to="/">
            <h1 className="text-4xl font-en hover:text-indigo-400 p-2 mr-6 my-1 font-normal hidden md:block">sido.</h1>
          </Link>
          <div
            onClick={() => {
              setOpen((e) => !e);
            }}
            className={styles.menu}
          >
            {!open && <RxHamburgerMenu className="w-6 h-6 cursor-pointer md:hidden z-50 " />}
            {open && <VscChromeClose className="w-6 h-6 cursor-pointer md:hidden z-50 " />}
          </div>
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
          {user && (
            <Link to="/carts">
              <CartStatus />
            </Link>
          )}
          {user && user.isAdmin && (
            <Link to="/products/new" className="text-2xl">
              <BsFillPencilFill />
            </Link>
          )}
          {user && <User user={user} />}
          {!user && (
            <button onClick={login} className={styles.login}>
              LOGIN
            </button>
          )}
          {user && (
            <button onClick={logout} className={styles.logout}>
              LOGOUT
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
