import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import { routes } from "../../routes";
import styles from "./MakeupOffer.module.scss";
import makijazSlubnyIndywidualny from "../../localData/images/makijazSlubnyIndywidualny.jpeg";

const MakeupOffer = () => {
  const context = useContext(AppContext);
  return (
    <main>
      <h2>OFERTA MAKIJAZOWA</h2>
      <div className={styles.offers}>
        <div className={styles.offerConainer}>
          <Link to={routes.indMakeup}>
            <img
              src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
              alt="na codzien"
            ></img>
            <p class={styles.offerTitle}>MAKIJAZ INDYWIDUALNY</p>
          </Link>
        </div>
        <div className={styles.offerConainer}>
          <Link to={routes.weddMake}>
            <img
              src="https://images.unsplash.com/photo-1579983996314-8c789798f7e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt="ślubny"
            ></img>
            <p class={styles.offerTitle}>PAKIET ŚLUBNY</p>
          </Link>
        </div>
        <div className={styles.offerConainer}>
          <Link to={routes.indWeddMake}>
            <img src={makijazSlubnyIndywidualny} alt="ślubny"></img>
            <p class={styles.offerTitle}>PAKIET ŚLUBNY INDYWIDUALNY</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MakeupOffer;
