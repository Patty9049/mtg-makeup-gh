import React, { useContext } from "react";
import AppContext from "../../context";

const PrivacyPolicy = () => {
  const context = useContext(AppContext);
  return (
    <div>
      <p>
        Niniejsza polityka prywatności opisuje zasady postępowania z danymi
        osobowymi oraz ich wykorzystywania w ramach strony internetowej
        www.monikaturczynskagocko.pl
      </p>
      <p>
        Administratorem strony jest Monika Turczyńska-Gocko (firma), z którym
        można się skontaktować pod adresem e-mail monika.gocko@gmail.com
      </p>
      <p>
        §1 Dane osobowe
        <br />
        1. Użytkownik (każdy podmiot, który korzysta ze strony) może przekazywać
        swoje dane osobowe za pomocą formularzy dostępnych na stronie, takich
        jak formularz kontaktowy.
        <br />
        2. Dane przekazane przez formularz (np. email użytkownika) służą
        Administratorowi jedynie w celach kontaktowych z użytkownikiem, który
        wyraził chęć kontaktu za pomocą formularza.
        <br />
        3. Administrator gwarantuje poufność wszelkich przekazanych mu danych
        osobowych od użytkownika.
        <br />
        4. Podanie danych osobowych jest zawsze dobrowolne. Istnieje możliwość
        kontaktu w tradycyjny sposób na maila podanego powyżej.
        <br />
        5. Administrator nie udostępnia przekazanych mu danych jakimkolwiek
        podmiotom trzecim.
        <br />
        6. Administrator nie gromadzi danych osobowych użytkowników,
        wykorzystuje je jedynie jako możliwość kontaktu z użytkownikiem.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
