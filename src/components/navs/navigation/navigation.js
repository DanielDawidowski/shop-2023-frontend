import React from "react";
import { AnimatePresence } from "framer-motion";
import { NavStyles } from "./navigationStyles";
import Hamburger from "../hamburger/hamburger";
import Logo from "../../logo/logo";

function Nav({ toggleMenu, setToggleMenu }) {
  return (
    <AnimatePresence>
      {toggleMenu && (
        <>
          <NavStyles
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
          >
            <Logo />
            <Hamburger setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
          </NavStyles>
        </>
      )}
    </AnimatePresence>
  );
}

export default Nav;
