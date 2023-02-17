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
import SubCategoryHeader from "../navs/header/subCategoryHeader";
import Drawer from "../navs/drawer/drawer";

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [category, setCategory] = useState("");

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
            setHovered={setHovered}
            setCategory={setCategory}
          />
          <SubCategoryHeader
            isHovered={isHovered}
            setHovered={setHovered}
            category={category}
          />
          <Nav
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            setToggleDrawer={setToggleDrawer}
          />
          <Drawer
            toggleDrawer={toggleDrawer}
            setToggleMenu={setToggleMenu}
            setToggleDrawer={setToggleDrawer}
            toggleMenu={toggleMenu}
          />
          <main>{children}</main>
        </LayoutStyles>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default Layout;
