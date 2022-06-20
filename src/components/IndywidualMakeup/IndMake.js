import React from "react";
import styles from "./IndMake.module.scss";

const IndMake = () => {
  return (
    <main>
      <div className={styles.indMake}>
        <h2>Makijaż okazjonalny</h2>
        <p>
          Moja oferta obejmuje wykonie makijaży dziennych, biznesowych oraz
          wszelkich makijaży okazjonalnych, tj. makijaż ślubny, makijaż
          fotograficzny, makijaż wieczorowy, makijaż kobiety dojrzałej.
        </p>
        <p>
          Koszt <strong>190 zł</strong>
        </p>
        <p>
          Po wcześniejszym uzgodnieniu możliwy jest dojazd do wskazanego miejsca
          wykonania makijażu indywidualnego na terenie powiatu
          dzierżoniowskiego.
          <br />
          Za dojazd doliczam 3,00 zł/km (liczone w obie strony)
        </p>
        <p>
          Czas trawania <strong>1 - 1,5h</strong>
        </p>
        <p>
          Co zawiera:
          <br />
          - profesjonaną pielęgnację cery przed makijażem
          <br />
          - dobór makijażu do koliczności oraz jego profesjonane wykonanie
          <br />
          - sztuczne rzęsy aplikowane w kępkach
          <br />
          - korekta niewielkich niedoskonałości na ciele
          <br />
          - w zależności od okoliczności i kreacji - rozświetlanie ciała
          <br />- utrwalanie makijażu
        </p>
      </div>
    </main>
  );
};

export default IndMake;
