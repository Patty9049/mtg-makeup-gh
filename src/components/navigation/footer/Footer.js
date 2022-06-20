import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../../context/index";
import {
  faInstagramSquare,
  faFacebookSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { routes } from "../../../routes";

const Footer = () => {
  const context = useContext(AppContext);
  return (
    <footer>
      <div className={styles.iconContainer}>
        <a
          href="https://www.instagram.com/monika.turczynska_gocko_makeup/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a
          href="https://www.facebook.com/pages/category/Product-Service/Turczy%C5%84ska-Gocko-Makeup-100720914655675/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <Link to={routes.contact}>
          <FontAwesomeIcon icon={faPhoneSquare} />
        </Link>
        <a
          href="https://www.youtube.com/channel/UCEigoIV1zO-wjH1pAZnadSg"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
