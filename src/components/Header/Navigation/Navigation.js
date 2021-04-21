import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.scss";
import logo from "../../../static/logo.png";
import logoWhite from "../../../static/logo_white.png";
import HamburgerButton from "../../../components-lib/HamburgerButton/HamburgerButton";
import useMenuContext from "../../../hooks/menuContext";

const NAV_LINKS = [
  { title: "Home", src: "/" },
  { title: "Tutorials", src: "/tutorials" },
  { title: "Projects", src: "/projects" },
  { title: "Bachelor Thesis", src: "/thesis" },
  { title: "About", src: "/about" },
];

const Navigation = () => {
  const { isOpen, toggleMenu } = useMenuContext();
  return (
    <nav className={styles.navigation}>
      <ul>
        {window.innerWidth > 420 ? (
          <img className={styles.logo} alt="logo" src={logo} />
        ) : (
          <div className={styles.navHeader}>
            <img className={styles.logo} alt="logo" src={logoWhite} />
            <HamburgerButton />
          </div>
        )}
        {(window.innerWidth > 420 || isOpen) &&
          NAV_LINKS.map((link, index) => (
            <li key={`link-${index}`}>
              <Link to={link.src} onClick={() => toggleMenu()}>
                {link.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;
