import React, { useContext } from "react";
import AppContext from "../../context";
import "./SingleWorkImage.module.scss";

const SingleWorkImage = () => {
  const context = useContext(AppContext);
  return (
    <main>
      <img
        src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2002&q=80"
        alt="kosmetyki"
      ></img>
    </main>
  );
};

export default SingleWorkImage;
