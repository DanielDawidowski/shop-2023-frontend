import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "../hamburger/hamburger";
import { HeaderNav } from "./headerStyles";

function Header({ toggleMenu, setToggleMenu, toggleTheme }) {
  return (
    <HeaderNav>
      <div onClick={toggleTheme}>CinemaApp</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Hamburger setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
    </HeaderNav>
  );
}

export default Header;
