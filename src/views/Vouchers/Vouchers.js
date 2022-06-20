import React from "react";
import styles from "./Vouchers.module.scss";

const Vouchers = () => {
  return (
    <main>
      <h2>VOUCHERY</h2>
      <p className={styles.voucherCont}>
        &nbsp;&nbsp;Podaruj bliskiej Ci osobie prezent i zapewnij jej
        niezapomnianą przygodę z makijażem.
        <br />
        <br />
        Voucher do wykorzystania przez okres 1 roku.
        <br />
        <br />
        Cena od <strong> 200 zł.</strong>
      </p>
    </main>
  );
};

export default Vouchers;
