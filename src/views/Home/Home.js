import React, { useContext } from "react";
import AppContext from "../../context";
import styles from "./Home.module.scss";
import "./Home.module.scss";
import homeImg from "../../localData/images/home.jpeg";
import MyWorks from "../MyWorks/MyWorks";
import { RiDoubleQuotesL } from "react-icons/ri";
import Vouchers from "../Vouchers/Vouchers";
import Offers from "../Offers/Offers";
import Contact from "../Contact/Contact";
import ReactPlayer from "react-player";

const Home = () => {
  const context = useContext(AppContext);
  return (
    <main>
      <ReactPlayer
        width="100%"
        height="400px"
        className={styles.reactPlayer}
        url="https://www.youtube.com/watch?v=QwyzDgWPHC0"
      />
      <h2>O MNIE</h2>
      <img
        className={styles.homeImg}
        src={homeImg}
        alt="Moje zdjęcie. W krótkich blond włosach i białym garniturze"
      ></img>
      <div class={styles.homeContent}>
        <br />
        <div className={styles.quote}>
          <RiDoubleQuotesL />
          <p>
            <br />
            <br />
            &nbsp;Aby osiągnąć wielkie rzeczy, musimy nie tylko działać ale i
            marzyć;
            <br />
            Musimy nie tylko planować, ale też wierzyć&nbsp;
            <p className={styles.author}>Anatole France</p>&nbsp;
          </p>
        </div>
        &nbsp;&nbsp;
        <p>Nazywam się Monika Turczyńska-Gocko.</p>
        <p>Odkąd sięgam pamięcią, to zawsze chciałam malować.</p>
        <p>
          Nie spodziewałam się jednak ,że pokocham malowanie kobiecych twarzy.
          Moje marzenie tliło się we mnie od lat, jednak dopiero po
          czterdziestce doszło do głosu.
        </p>
        <p>
          Postanowiłam się spełniać i realizować swoje pasje.
          <br /> Postawiłam na rozwój i dziś, dzięki zaangażowaniu i
          wytrwałości, doszłam
          <br /> do tego miejsca, w którym jestem.
        </p>
        <p>
          Wysoce cenię sobie podkreślenie naturalnego piękna kobiety w każdym
          wieku,
          <br />
          jak również jakość i indywidualne podejście.
        </p>
        <p>Pracuję na produktach najwyższej jakości marek selektywnych.</p>
        <p>Prowadzę lekcje makijażu na własne potrzeby.</p>
        <p>
          Uczę kobiety jak codzienną pielęgnacją i makijażem mogą podkreślić
          swoje wewnętrzne i naturalne piękno.
        </p>
        <p>
          Jak smakuje spełnione marzenie? <br />
          Widzę je w tym błysku, który pojawia się w oczach moich klientek
          <br /> po wykonanym makijażu.
        </p>
        <br />
        <br />
        <br />
      </div>
      <MyWorks />
      <Vouchers />
      <Offers />
      <Contact />
    </main>
  );
};

export default Home;
