import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../navs/header/header";
import Nav from "../navs/navigation/navigation";
import { GlobalStyle } from "./layoutStyles";

const themeGlobal = {
  breakpoint_large: " 1920px",
  breakpoint_medium: "1440px",
  breakpoint_small: "960px",
  breakpoint_xsmall: "480px",
  white: "#ffffff",
  red: "#f94144",
  black: "#333333",
  orange: "#f3722c",
  yellow: "#f9c74f",
  blue: "#277da1",
  green: "#aec62e",
  size1: "8px",
  size2: "12px",
  size3: "16px",
  size4: "24px",
  size5: "36px",
  size6: "54px",
  size7: "72px",
};

const theme = {
  dark: {
    background: (props) => props.theme.black,
    color: (props) => props.theme.white,
  },
  light: {
    background: (props) => props.theme.white,
    color: (props) => props.theme.black,
  },
};

const Layout = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={themeGlobal}>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <Header
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          toggleTheme={toggleTheme}
        />
        <Nav
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          toggleTheme={toggleTheme}
        />
        <main>{children}</main>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default Layout;
