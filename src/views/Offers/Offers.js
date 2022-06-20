import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import { routes } from "../../routes";
import styles from "./Offers.module.scss";

const Offers = () => {
  const context = useContext(AppContext);
  return (
    <main>
      <h2>OFERTA</h2>
      <div className={styles.offers}>
        <div className={styles.offerConainer}>
          <Link to={routes.indMakeup}>
            <p class={styles.offerTitle}>Makijaż okazjonalny</p>
            <p>
              Moja oferta obejmuje wykonie makijaży dziennych, biznesowych oraz
              wszelkich makijaży okazjonalnych...
            </p>
            <h5>Czytaj dalej...</h5>
          </Link>
        </div>
        <div className={styles.offerConainer}>
          <Link to={routes.weddMake}>
            <p class={styles.offerTitle}>Pakiet ślubny VIP z dojazdem</p>
            <p>
              Doskonale wiem, że jest to niezmiernie wyjątkowy dla Ciebie dzień,
              pełen wrażeń i uniesień. Planowałaś go od dawna...
            </p>
            <h5>Czytaj dalej...</h5>
          </Link>
        </div>
        <div className={styles.offerConainer}>
          <Link to={routes.indWeddMake}>
            <p class={styles.offerTitle}>Makijaż Ślubny w Studio</p>
            <p>
              Indywidualny Pakiet Ślubny to kilka dodatkowych opcji do
              klasycznego Pakietu Ślubnego ...
            </p>
            <h5>Czytaj dalej...</h5>
          </Link>
        </div>
        <div className={styles.offerConainer}>
          <Link to={routes.training}>
            <p class={styles.offerTitle}>Szkolenia</p>
            <p>
              Jeśli Twój codzienny makijaż sprawia Ci kłopot i mimo wielkich
              starań po kilku godzinach znika z twarzy ...
            </p>
            <h5>Czytaj dalej...</h5>
          </Link>
        </div>
        <div className={styles.offerConainer}>
          <Link to={routes.sunBathing}>
            <p class={styles.offerTitle}>Opalanie natryskowe</p>
            <p>
              Opalanie natryskowe daje Ci możliwość cieszenia się piękną
              opalenizną, bez konieczności długotrwałej ekspozycji na
              promieniowanie słoneczne ...
            </p>
            <h5>Czytaj dalej...</h5>
          </Link>
        </div>
        <div className={styles.offerConainer}>
          <a
            href="https://www.arbonne.com/pl/pl/arb/MonikaTurczy%C5%84skaGocko"
            target="_blank"
          >
            <p class={styles.offerTitle}>Arbonne</p>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Offers;
