import React, { useContext } from "react";
import AppContext from "../../context";
import styles from "./Header.module.scss";

const Header = () => {
  const context = useContext(AppContext);
  return (
    <header className={styles.header}>
      <h1 className={styles.header_mainTitle}>MONIKA TURCZYŃSKA-GOCKO</h1>
      <h3 className={styles.header_smallTitle}>
        PRO&nbsp;&nbsp;MAKEUP&nbsp;&nbsp;ARTIST&nbsp;&nbsp;&nbsp;
        <span className={styles.header_smallTitle}>&&nbsp;&nbsp;&nbsp;</span>
        BEAUTY&nbsp;&nbsp;TRAINER&nbsp;&nbsp;
      </h3>
    </header>
  );
};

export default Header;
