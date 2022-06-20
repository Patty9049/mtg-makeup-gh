import React, { useContext } from "react";
import AppContext from "../../context";
import styles from "./Training.module.scss";
import { GoArrowRight } from "react-icons/go";
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";

const Training = () => {
  const context = useContext(AppContext);
  return (
    <main>
      <div>
        <h2>Szkolenia</h2>
        <h3>Lekcja makijażu na własny użytek</h3>
        <div className={styles.trainingCont}>
          <p>
            Jeśli Twój codzienny makijaż sprawia Ci kłopot i mimo wielkich
            starań po kilku godzinach znika z twarzy ... &nbsp;&nbsp;
          </p>
          <p>
            Zastanawiasz się, jaka pielęgnacja przed makijażem jest dla Ciebie
            odpowiednia ... &nbsp;&nbsp;
          </p>
          <p>
            Zastanawiasz się, jakie kosmetyki i kolorystyka są dla Ciebie
            odpowiednie ... &nbsp;&nbsp;
          </p>
          <p>
            Chciałabyś, aby Twój makijaż podkreślał Twoją urodę i styl oraz
            pomógł poczuć się wyjątkowo... &nbsp;&nbsp;
          </p>
          <p>TAK?</p>
          <p>
            {" "}
            <BsSuitHeart />
            &nbsp;&nbsp; To ta lekcja jest dla Ciebie&nbsp;&nbsp;
            <BsSuitHeart />
            <br />
            <br />
            <br />
          </p>
          <p>
            <strong>Otrzymasz:</strong>
            <br />
            <br />
            <br />
            <BsSuitHeart />
            &nbsp;&nbsp; Po zapoznaniu się z Twoim stylem i oczekiwaniami,
            wspólnie ustalimy priorytety naszej lekcji.
            <br />
            <BsSuitHeart />
            &nbsp;&nbsp; Przeanalizujemy zawartość Twojej kosmetyczki.
            <br />
            <BsSuitHeart />
            <br />
            <br />
            <br />
            <strong>Wykonamy makijaż dzienny/biznesowy</strong>
            <br />
            <br />
            <br />
            Dobierzemy odpowiednie produkty do domowej pielęgnacji.
            <br />
            Wykonamy aplikację podkładu, pudru oraz korektorów.
            <br />
            Wymodelujemy twarz za pomocą konturowania produktami na mokro i na
            sucho.
            <br />
            Wymodelujemy oko wykonując makijaż dobrany do jego kształtu
            <br />
            Wykonamy makijaż brwi.
            <br />
            <br />
            <br />
            <strong>Wykonamy makijaż wieczorowy.</strong>
            <br />
            <br />
            <br />
            Dobierzemy podkład o przedłużonej trwałości, dedykowany na większe
            wyjścia.
            <br />
            Zmienimy makijaż oka w eleganckie smoky eyes.
            <br />
            Subtelnie rozświetlimy skórę twarzy i dekoltu.
            <br />
            Poszalejemy z kolorem ust
            <br />
            <br />
            <br />
            Czas trwania: 2-3 h
            <br />
            <br />
            Koszt w 2022r. - 400 zł
            <br />
            <br />
            Zadatek: 100 zł
          </p>
        </div>
      </div>
    </main>
  );
};

export default Training;
