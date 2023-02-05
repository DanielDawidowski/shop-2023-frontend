import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Header from "../navs/header/header";
import Nav from "../navs/nav/nav";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  }
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased; 
    -webkit-tap-highlight-color: transparent;
}
body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }
a {
  text-decoration: none
}
  a:focus {
    outline: none;
  }
ul {
  list-style: none
}
li {
  list-style-type: none
}
img {
    max-width: 100%;
}
`;

const themeGlobal = {
  breakpoint_large: " 1920px",
  breakpoint_medium: "1440px",
  breakpoint_small: "960px",
  breakpoint_xsmall: "480px",
  white: "#ffffff",
  red: "#f94144",
  black: "#000000",
  orange: "#f3722c",
  yellow: "#f9c74f",
  blue: "#277da1",
  green: "#aec62e",
};

const theme = {
  dark: {
    background: "black",
    color: "white",
  },
  light: {
    background: "white",
    color: "black",
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
