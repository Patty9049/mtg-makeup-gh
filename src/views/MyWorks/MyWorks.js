import React, { useContext } from "react";
import MyWorksList from "../../components/MyWorksList/MyWorksList";
import AppContext from "../../context";
import "./MyWorks.module.scss";

const MyWorks = () => {
  const context = useContext(AppContext);
  return (
    <main>
      <h2>GALERIA</h2>
      <MyWorksList />
    </main>
  );
};

export default MyWorks;
