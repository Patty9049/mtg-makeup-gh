import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../context";
import { routes } from "../../../routes/index";
import "./Navbar.module.scss";
import styles from "./Navbar.module.scss";
import { Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navigation = () => {
  const context = useContext(AppContext);
  const { isMenuOpen, onClickOpenMenu, onClickCloseMenu } =
    useContext(AppContext);

  return (
    <nav isMenuOpen={isMenuOpen}>
      {isMenuOpen ? (
        <div className={styles.navContainer2}>
          <Button variant="text" onClick={() => onClickCloseMenu()}>
            <CgClose />
          </Button>
          <ul>
            <Link to={routes.home} onClick={() => onClickCloseMenu()}>
              <li>HOME</li>
            </Link>
            <Link to={routes.myWorks} onClick={() => onClickCloseMenu()}>
              <li>MOJE PRACE</li>
            </Link>
            <Link to={routes.vouchers} onClick={() => onClickCloseMenu()}>
              <li>VOUCHERY</li>
            </Link>
            <Link to={routes.offers} onClick={() => onClickCloseMenu()}>
              <li>OFERTA</li>
            </Link>
            <Link to={routes.contact} onClick={() => onClickCloseMenu()}>
              <li>KONTAKT</li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className={styles.navContainer1}>
          <Button variant="text" onClick={() => onClickOpenMenu()}>
            <GiHamburgerMenu />
          </Button>
          <ul className={styles.hidden}>
            <Link to={routes.home}>
              <li>HOME</li>
            </Link>
            <Link to={routes.myWorks}>
              <li>MOJE PRACE</li>
            </Link>
            <Link to={routes.vouchers}>
              <li>VOUCHERY</li>
            </Link>
            <Link to={routes.offers}>
              <li>OFERTA</li>
            </Link>
            <Link to={routes.contact}>
              <li>KONTAKT</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
