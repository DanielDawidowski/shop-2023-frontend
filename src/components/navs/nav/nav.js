import React from "react";
import { AnimatePresence } from "framer-motion";
import { NavStyles } from "./navStyles";
import Hamburger from "../hamburger/hamburger";

function Nav({ toggleMenu, setToggleMenu, toggleTheme }) {
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
            <div onClick={toggleTheme}>CinemaApp</div>
            <Hamburger setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
          </NavStyles>
        </>
      )}
    </AnimatePresence>
  );
}

export default Nav;
