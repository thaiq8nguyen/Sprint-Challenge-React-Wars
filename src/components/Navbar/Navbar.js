import React from "react";
import cx from "classnames";
import styles from "./Navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <a href="" className="navbar-item">
          <h1
            className={cx("is-size-2 has-text-weight-bold", styles.navbarTitle)}
          >
            React War
          </h1>
        </a>
      </div>
      <div className="navbar-menu"></div>
    </nav>
  );
};

export default Navbar;
