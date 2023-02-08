import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../navs/header/header";
import CategoryHeader from "../navs/header/categoryHeader";
import Nav from "../navs/navigation/navigation";
import { GlobalStyle } from "../globalStyles/global";
import { TypographyStyles } from "../globalStyles/typography";
import Search from "../search/search";
import Modal from "../modal/modal";
import { LayoutStyles } from "./layoutStyles";
import { theme, themeGlobal } from "./variables";

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={themeGlobal}>
      <ThemeProvider theme={theme[currentTheme]}>
        <LayoutStyles>
          <GlobalStyle />
          <TypographyStyles />
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <Search />
          </Modal>
          <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
          <CategoryHeader
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            setShowModal={setShowModal}
          />
          <Nav
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            toggleTheme={toggleTheme}
          />
          <main>{children}</main>
        </LayoutStyles>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default Layout;
