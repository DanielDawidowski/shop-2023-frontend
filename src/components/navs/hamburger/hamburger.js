import React from "react";
import { HamburgerMenu, CloseMenu } from "./hamburgerStyles";

const Hamburger = ({ toggleMenu, setToggleMenu, close = false }) => {
  return (
    <>
      {close ? (
        <CloseMenu>
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <span></span>
            <span></span>
          </button>
        </CloseMenu>
      ) : (
        <HamburgerMenu>
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </HamburgerMenu>
      )}
    </>
  );
};

export default Hamburger;
