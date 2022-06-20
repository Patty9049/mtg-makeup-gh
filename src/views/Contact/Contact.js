import React, { useContext } from "react";
import AppContext from "../../context";
import styles from "./Contact.module.scss";
import {
  faInstagramSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../../components/contactForm/ContactForm";

const Contact = () => {
  const context = useContext(AppContext);
  return (
    <main>
      <h2>KONTAKT</h2>
      <div className={styles.contactCont}>
        <strong></strong>
        <p>
          <strong>Monika Turczyńska-Gocko Makeup Artist</strong>
        </p>
        <p>
          <strong>Jaźwina 56</strong>
        </p>
        <p>
          <strong>58-212 Jaźwina, woj. Dolnośląskie</strong>
        </p>
        <p className={styles.red}>
          <FontAwesomeIcon icon={faPhoneSquare}>695 821 482</FontAwesomeIcon>
          &nbsp;&nbsp;&nbsp;<strong>695 821 482</strong>{" "}
        </p>
        <div className={styles.contactContainerIcons}>
          <a
            href="https://www.instagram.com/turczynska_gocko_makeup/"
            target="_blank"
          >
            <p>
              <FontAwesomeIcon icon={faInstagramSquare}>
                {" "}
                turczynska_gocko_makeup{" "}
              </FontAwesomeIcon>
              &nbsp;&nbsp;&nbsp;<strong> turczynska_gocko_makeup</strong>
            </p>
          </a>
          <a
            href="https://www.facebook.com/pages/category/Product-Service/Turczy%C5%84ska-Gocko-Makeup-100720914655675/"
            target="_blank"
          >
            <p>
              <FontAwesomeIcon icon={faFacebookSquare}>
                {" "}
                Turczyńska-Gocko Makeup{" "}
              </FontAwesomeIcon>
              &nbsp;&nbsp;&nbsp;<strong>Turczyńska-Gocko Makeup</strong>
            </p>
          </a>
        </div>
      </div>

      <main className={styles.googleMapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1060.3129184545567!2d16.699730129005886!3d50.79664130992106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e3541ff793b77%3A0x593e30bc3008a7cb!2sJa%C5%BAwina%2056%2C%2058-212%20Ja%C5%BAwina!5e0!3m2!1spl!2spl!4v1624864919034!5m2!1spl!2spl"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </main>
      <ContactForm />
    </main>
  );
};

export default Contact;
