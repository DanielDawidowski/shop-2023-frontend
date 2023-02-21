import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "../../globalStyles/icon";

//Variants
const variants = {
  active: {
    x: "2px",
    opacity: 0,
    transition: { duration: 0.6 },
    display: "none",
  },
  inActive: {
    x: "-2px",
    opacity: 1,
    transition: { duration: 0.6 },
    display: "block",
  },
};

const SettingsHeader = ({ toggleTheme, currentTheme }) => {
  const { cart, wish } = useSelector((state) => ({ ...state }));

  const getCartLength = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count;
    }, 0);
  };

  return (
    <>
      <Icon
        noborder="false"
        viewBox="-5.5 -5.5 28 28"
        onClick={() => toggleTheme(currentTheme)}
        variants={variants}
        initial="hidden"
        animate={currentTheme === "dark" ? "active" : "inActive"}
      >
        <path d="M11.47 2.18a6.49 6.49 0 0 1 3.22 5.5 6.84 6.84 0 0 1-7.08 6.55 7.42 7.42 0 0 1-3.82-1 7 7 0 0 1-1.9-1.65 9.47 9.47 0 0 0 3.34-.74 9.92 9.92 0 0 0 3.3-2.24 10 10 0 0 0 2.94-6.42M10.82.45a.66.66 0 0 0-.66.69 8.63 8.63 0 0 1-2.55 6.54 8.68 8.68 0 0 1-6.09 2.57H.66a.66.66 0 0 0-.58 1 8.45 8.45 0 0 0 7.53 4.39A8.15 8.15 0 0 0 16 7.68 7.85 7.85 0 0 0 11.07.51a.61.61 0 0 0-.25-.06z" />
      </Icon>

      <Icon
        noborder="false"
        viewBox="-6.5 0 34 34"
        onClick={() => toggleTheme(currentTheme)}
        variants={variants}
        initial="hidden"
        animate={currentTheme === "light" ? "active" : "inActive"}
      >
        <path d="M10.68 21.64c-3.12 0-5.64-2.52-5.64-5.64s2.52-5.64 5.64-5.64 5.64 2.52 5.64 5.64-2.52 5.64-5.64 5.64zM10.68 12.040c-2.2 0-3.96 1.76-3.96 3.96s1.76 3.96 3.96 3.96 3.96-1.76 3.96-3.96-1.76-3.96-3.96-3.96zM10.68 9.040c-0.48 0-0.84-0.36-0.84-0.84v-2.040c0-0.48 0.36-0.84 0.84-0.84s0.84 0.36 0.84 0.84v2.040c0 0.48-0.36 0.84-0.84 0.84zM16.2 11.32c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l1.44-1.44c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-1.44 1.44c-0.2 0.16-0.4 0.24-0.6 0.24zM18.48 16.84c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h2.040c0.48 0 0.84 0.36 0.84 0.84s-0.36 0.84-0.84 0.84h-2.040zM17.64 23.8c-0.2 0-0.44-0.080-0.6-0.24l-1.44-1.48c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l1.44 1.44c0.32 0.32 0.32 0.84 0 1.2-0.16 0.2-0.4 0.28-0.6 0.28zM10.68 26.68c-0.48 0-0.84-0.36-0.84-0.84v-2.040c0-0.48 0.36-0.84 0.84-0.84s0.84 0.36 0.84 0.84v2.040c0 0.48-0.36 0.84-0.84 0.84zM3.72 23.8c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l1.44-1.44c0.32-0.32 0.84-0.32 1.2 0s0.32 0.84 0 1.2l-1.44 1.44c-0.16 0.16-0.4 0.24-0.6 0.24zM0.84 16.84c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h2.040c0.48 0 0.84 0.36 0.84 0.84s-0.36 0.84-0.84 0.84h-2.040zM5.16 11.32c-0.2 0-0.44-0.080-0.6-0.24l-1.44-1.44c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l1.44 1.44c0.32 0.32 0.32 0.84 0 1.2-0.16 0.16-0.36 0.24-0.6 0.24z" />
      </Icon>

      <Icon viewBox="-6.5 -6.5 30 30">
        <path d="M8 7.83c-3.08 0-5.59 2.17-5.59 4.84V16h1.27v-3.33c0-2 1.94-3.57 4.32-3.57s4.32 1.6 4.32 3.57V16h1.27v-3.33c0-2.67-2.51-4.84-5.59-4.84zm.1-1.22a3.22 3.22 0 0 0 3.1-3.31A3.21 3.21 0 0 0 8.1 0 3.21 3.21 0 0 0 5 3.3a3.22 3.22 0 0 0 3.1 3.31zm0-5.32a1.92 1.92 0 0 1 1.81 2 1.93 1.93 0 0 1-1.81 2 1.93 1.93 0 0 1-1.8-2 1.92 1.92 0 0 1 1.8-2z" />
      </Icon>
      <div className="header__heart">
        {wish.length > 0 ? (
          <Link to="/wishlist">
            <Icon viewBox="0 0 512 450">
              <path
                d="m449.28 121.43a115.2 115.2 0 0 0 -137.89-35.75c-21.18 9.14-40.07 24.55-55.39 45-15.32-20.5-34.21-35.91-55.39-45a115.2 115.2 0 0 0 -137.89 35.75c-16.5 21.62-25.22 48.64-25.22 78.13 0 42.44 25.31 89 75.22 138.44 40.67 40.27 88.73 73.25 113.75 89.32a54.78 54.78 0 0 0 59.06 0c25-16.07 73.08-49.05 113.75-89.32 49.91-49.42 75.22-96 75.22-138.44 0-29.49-8.72-56.51-25.22-78.13z"
                fill="#f9595f"
              />
            </Icon>
            <span>
              <b>{wish.length}</b>
            </span>
          </Link>
        ) : (
          <Icon viewBox="-3 -4 22 22">
            <path d="M14.37 2.56a3.92 3.92 0 0 0-3-1 4.1 4.1 0 0 0-1.82.52A9.18 9.18 0 0 0 8 3.06a9.35 9.35 0 0 0-1.49-1 3.85 3.85 0 0 0-1.77-.52A4.07 4.07 0 0 0 1.63 2.6 4 4 0 0 0 .35 5.52a3.83 3.83 0 0 0 .88 2.33 33.87 33.87 0 0 0 5.7 6.2l.39-.49-.38.49a1.67 1.67 0 0 0 1.06.42 1.71 1.71 0 0 0 1.08-.42 37.42 37.42 0 0 0 6.06-6.73 3.5 3.5 0 0 0 .47-1.74 4 4 0 0 0-1.24-3.02zm-.26 4.06a37.1 37.1 0 0 1-5.81 6.46.56.56 0 0 1-.28.13.51.51 0 0 1-.29-.14 32.77 32.77 0 0 1-5.49-5.94 2.74 2.74 0 0 1-.64-1.61 2.75 2.75 0 0 1 .88-2 2.79 2.79 0 0 1 2.16-.72h.1a2.73 2.73 0 0 1 1.19.38A10.23 10.23 0 0 1 7.24 4l.76.63.76-.63a9 9 0 0 1 1.34-.86 2.91 2.91 0 0 1 1.26-.39h.1a2.68 2.68 0 0 1 2.07.68 2.78 2.78 0 0 1 .87 2 2.18 2.18 0 0 1-.29 1.19z" />
          </Icon>
        )}
      </div>
      <div className="header__cart">
        <Link to="/cart">
          <Icon viewBox="-150.5 -200.5 1440 1440">
            <path d="M800.8 952c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56z m-448 0c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56zM344 792c-42.4 0-79.2-33.6-84-76l-54.4-382.4-31.2-178.4c-2.4-19.2-19.2-35.2-37.6-35.2H96c-13.6 0-24-10.4-24-24s10.4-24 24-24h40.8c42.4 0 80 33.6 85.6 76l31.2 178.4 54.4 383.2C309.6 728 326.4 744 344 744h520c13.6 0 24 10.4 24 24s-10.4 24-24 24H344z m40-128c-12.8 0-23.2-9.6-24-22.4-0.8-6.4 1.6-12.8 5.6-17.6s10.4-8 16-8l434.4-32c19.2 0 36-15.2 38.4-33.6l50.4-288c1.6-13.6-2.4-28-10.4-36.8-5.6-6.4-12.8-9.6-21.6-9.6H320c-13.6 0-24-10.4-24-24s10.4-24 24-24h554.4c22.4 0 42.4 9.6 57.6 25.6 16.8 19.2 24.8 47.2 21.6 75.2l-50.4 288c-4.8 41.6-42.4 74.4-84 74.4l-432 32c-1.6 0.8-2.4 0.8-3.2 0.8z" />
          </Icon>
          {cart.length > 0 && (
            <div className="header__cart--amount">
              <span>{getCartLength()}</span>
            </div>
          )}
        </Link>
      </div>
    </>
  );
};

export default SettingsHeader;
