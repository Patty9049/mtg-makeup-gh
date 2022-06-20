import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./index.module.scss";

ReactDOM.render(
  <React.StrictMode>
    <App className={styles.app} />
  </React.StrictMode>,
  document.getElementById("root")
);
