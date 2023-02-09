import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
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

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [subCategory, setSubCategory] = useState("");

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
            setSubCategory={setSubCategory}
          />
          <SubCategoryHeader
            isHovered={isHovered}
            setHovered={setHovered}
            subCategory={subCategory}
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
