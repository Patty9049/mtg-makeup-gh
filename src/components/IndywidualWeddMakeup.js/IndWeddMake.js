import React from "react";
import styles from "./IndWeddMake.module.scss";

const IndWeddMake = () => {
  return (
    <main className={styles.indWeddMake}>
      <h2>Makijaż Ślubny w Studio</h2>
      <p>
        Koszt Pakietu Ślubnego to <strong> 600,00 zł</strong>.
        <br />
        <br />
        &nbsp;&nbsp;Indywidualny Pakiet Ślubny dla Panny Młodej obejmuje:
        <br />
        <br />
        <strong>1.</strong> Makijaż próbny (ok. 2h), a w nim:
        <br />
        <br />
        - ocenę kondycji skóry, dobór odpowiedniej pielęgnacji i rekomendację
        zalecanych zabiegów, mających na celu przygotowanie skóry do dnia ślubu.
        <br />
        <br />
        <strong>2.</strong> Makijaż w dniu ślubu (ok.1.20 h):
        <br />
        <br />
        - sztuczne rzęsy aplikuję w kępkach – pracuję na kępkach najwyższej
        jakości
        <br />
        <br />
        - korekta niewielkich niedoskonałości na ciele (jeśli takie wystąpią)
        <br />
        <br />- rozświetlenie (dekolt, szyja, plecy, ramiona, ręce)
        <br />
        <br />
        <strong>3.</strong> Korekta Pana Młodego (opcjonalnie) – gratis.
        <br />
        <br />
        <strong>Dodatkowo:</strong>
        <br />
        <br />
        &nbsp;&nbsp;Makijaż na poprawiny, bądź makijaż do sesji zdjęciowej
        ślubnej w cenie – 250 zł (korekta Pana Młodego - gratis). Koszt tej
        usługi przy skorzystaniu z wcześniej wykupionego Indywidualnego Pakietu
        Ślubnego. &nbsp;&nbsp;Warunkiem rezerwacji i utrzymania terminu jest
        wpłata zadatku w wysokości <strong>200 zł</strong>.
        <br />
        <br />
      </p>
      <p className={styles.italicInfo}>
        &nbsp;&nbsp;Zapraszam do kontaktu w razie dodatkowych pytań
      </p>
    </main>
  );
};

export default IndWeddMake;
