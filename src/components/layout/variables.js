export const themeGlobal = {
  breakpoint_large: " 1920px",
  breakpoint_medium: "1440px",
  breakpoint_small: "960px",
  breakpoint_xsmall: "480px",
  white: "#ffffff",
  black: "#333333",
  red: "#f94144",
  orange: "#f3722c",
  yellow: "#f9c74f",
  blue: "#277da1",
  green: "#aec62e",
  grey: "#e9e9e9",
  size1: "8px",
  size2: "12px",
  size3: "16px",
  size4: "24px",
  size5: "36px",
  size6: "54px",
  size7: "72px",
};

export const theme = {
  dark: {
    background: (props) => props.theme.black,
    color: (props) => props.theme.white,
  },
  light: {
    background: (props) => props.theme.white,
    color: (props) => props.theme.black,
  },
};
