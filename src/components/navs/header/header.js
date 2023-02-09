import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../layout/layoutStyles";
import Logo from "../../logo/logo";
import { HeaderStyles } from "./headerStyles";
import GenderHeader from "./genderHeader";
import SettingsHeader from "./settingsHeader";

function Header({ toggleTheme, currentTheme }) {
  return (
    <HeaderStyles>
      <Container>
        <div className="header--inner">
          <ul className="header--genders">
            <GenderHeader />
          </ul>
          <Link to="/">
            <div className="header--logo">
              <Logo />
            </div>
          </Link>
          <div className="header--icons">
            <SettingsHeader
              toggleTheme={toggleTheme}
              currentTheme={currentTheme}
            />
          </div>
        </div>
      </Container>
    </HeaderStyles>
  );
}

export default Header;
