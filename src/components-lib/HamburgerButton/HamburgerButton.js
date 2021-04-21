import React, { useState } from "react";
import useMenuContext from "../../hooks/menuContext";
import styles from "./HamburgerButton.scss";

const HamburgerButton = () => {
  const { isOpen, toggleMenu } = useMenuContext();
  return (
    <div className={styles.burgerButton}>
      <button
        className={isOpen ? styles.open : styles.closed}
        onClick={() => toggleMenu()}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default HamburgerButton;
