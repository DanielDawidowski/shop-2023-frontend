import React from "react";
import { AnimatePresence } from "framer-motion";
import { NavStyles } from "./navigationStyles";
import Hamburger from "../hamburger/hamburger";
import Logo from "../../logo/logo";
import GenderHeader from "../header/genderHeader";
import CategoryList from "../header/categoryList";

function Nav({ toggleMenu, setToggleMenu, setToggleDrawer }) {
  return (
    <AnimatePresence>
      {toggleMenu && (
        <>
          <NavStyles
            initial={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0.6, 0.05, -0.01, 0.9],
            }}
            exit={{ x: "-100%" }}
          >
            <div className="nav__header">
              <Logo nav />
              <Hamburger
                setToggleMenu={setToggleMenu}
                toggleMenu={toggleMenu}
                close
              />
            </div>
            <div className="nav__content">
              <ul className="nav__gender--list">
                <GenderHeader />
              </ul>
              <ul className="nav__category--list">
                <CategoryList setToggleDrawer={setToggleDrawer} nav />
              </ul>
            </div>
          </NavStyles>
        </>
      )}
    </AnimatePresence>
  );
}

export default Nav;
