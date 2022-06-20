import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context";
import { Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = () => {
  const { isMenuOpen, onClickOpenMenu } = useContext(AppContext);

  return (
    <Button
      variant="text"
      disabled={isMenuOpen}
      onClick={() => onClickOpenMenu()}
    >
      {isMenuOpen ? <GiHamburgerMenu /> : "yes"}
    </Button>
  );
};
export default HamburgerMenu;
