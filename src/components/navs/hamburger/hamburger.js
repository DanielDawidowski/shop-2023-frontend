import React, { useRef } from "react";
import { HamburgerMenu } from "./hamburgerStyles";

const Hamburger = ({ toggleMenu, setToggleMenu }) => {
  const hamburger = useRef(null);
  return (
    <HamburgerMenu>
      <button onClick={() => setToggleMenu(!toggleMenu)} ref={hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </HamburgerMenu>
  );
};

export default Hamburger;
