import styled from "styled-components";
import { motion } from "framer-motion";
import { createGlobalStyle } from "styled-components";

export const LayoutStyles = styled(motion.div)``;

export const Container = styled(motion.div)`
  margin: 0 auto;
  max-width: 900px;
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    max-width: 1200px;
  }
`;

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    -webkit-font-smoothing: antialiased; 
    -webkit-tap-highlight-color: transparent;
}

body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    font-family: "Manrope", sans-serif;
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

h1 {
    font-size: ${(props) => props.theme.size6};
}

h2 {
    font-size: ${(props) => props.theme.size3};
}

h3 {
    font-size: ${(props) => props.theme.size4};
}

h4 {
    font-size: ${(props) => props.theme.size3};
}

h5 {
    font-size: ${(props) => props.theme.size2};
}

h6 {
    font-size: ${(props) => props.theme.size1};
}

b {
    font-weight: 700;
}
`;
