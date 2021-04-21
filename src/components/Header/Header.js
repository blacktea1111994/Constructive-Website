import React from "react";
import Navigation from "./Navigation/Navigation";
import styles from "./Header.scss";
import ContentWrap from "../../components-lib/ContentWrap/ContentWrap";
import Headroom from "react-headroom";
import useMenuContext from "../../hooks/menuContext";

const Header = () => {
  const { isOpen } = useMenuContext();
  return (
    <>
      <header className={`${styles.mobile} ${isOpen && styles.isOpen}`}>
        <ContentWrap className={styles.headerContentWrap}>
          <Navigation />
        </ContentWrap>
      </header>
      <header className={styles.desktop}>
        <Headroom className={styles.headroom}>
          <ContentWrap className={styles.headerContentWrap}>
            <Navigation />
          </ContentWrap>
        </Headroom>
      </header>
    </>
  );
};

export default Header;
