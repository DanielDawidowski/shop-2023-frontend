import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import data from "../../../data.json";
import { DrawerStyles } from "./drawerStyles";
import { Icon } from "../../globalStyles/icon";
import Hamburger from "../hamburger/hamburger";
import Logo from "../../logo/logo";
import { getSubCategories } from "../../../functions/getSubCategories";
import { getSubIcons } from "../../../functions/getSubIcons";

function Drawer({ toggleDrawer, setToggleDrawer, setToggleMenu, toggleMenu }) {
  let { gender, category } = useSelector((state) => ({ ...state }));

  let dispatch = useDispatch();

  const setCategories = (category, sub) => {
    dispatch({
      type: "CATEGORY",
      payload: category,
    });
    dispatch({
      type: "SUB_CATEGORY",
      payload: sub,
    });
    setToggleDrawer(false);
    setToggleMenu(false);
  };

  return (
    <AnimatePresence>
      {toggleDrawer && (
        <DrawerStyles
          initial={{ x: "100%" }}
          animate={{ x: toggleDrawer ? 0 : "-100%" }}
          transition={{
            duration: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9],
          }}
          exit={{ x: "-100%" }}
        >
          <div
            className="drawer__header"
            onClick={() => setToggleDrawer(!toggleDrawer)}
          >
            <div className="drawer__close">
              <Icon viewBox="0 0 447.243 447.243">
                <path
                  d="M420.361,192.229c-1.83-0.297-3.682-0.434-5.535-0.41H99.305l6.88-3.2c6.725-3.183,12.843-7.515,18.08-12.8l88.48-88.48
                c11.653-11.124,13.611-29.019,4.64-42.4c-10.441-14.259-30.464-17.355-44.724-6.914c-1.152,0.844-2.247,1.764-3.276,2.754
                l-160,160C-3.119,213.269-3.13,233.53,9.36,246.034c0.008,0.008,0.017,0.017,0.025,0.025l160,160
                c12.514,12.479,32.775,12.451,45.255-0.063c0.982-0.985,1.899-2.033,2.745-3.137c8.971-13.381,7.013-31.276-4.64-42.4
                l-88.32-88.64c-4.695-4.7-10.093-8.641-16-11.68l-9.6-4.32h314.24c16.347,0.607,30.689-10.812,33.76-26.88
                C449.654,211.494,437.806,195.059,420.361,192.229z"
                />
              </Icon>
            </div>
            <div className="drawer__logo">
              <Logo />
            </div>
            <div className="drawer__close">
              <Hamburger
                setToggleMenu={setToggleMenu}
                toggleMenu={toggleMenu}
                close
              />
            </div>
          </div>
          <ul className="drawer__content">
            {getSubCategories(data, gender, category).map((el, index) => {
              return (
                // <Link to="/" onClick={() => console.log(el)}>
                <Link
                  to="/shop"
                  key={index}
                  onClick={() => setCategories(category, el.toLowerCase())}
                >
                  <motion.div className="sub__category--card">
                    {getSubIcons(data, gender, category, el).map(
                      (icon, index) => {
                        return <motion.img key={index} src={icon} alt="icon" />;
                      }
                    )}
                    <motion.h3>{el}</motion.h3>
                  </motion.div>
                </Link>
              );
            })}
          </ul>
        </DrawerStyles>
      )}
    </AnimatePresence>
  );
}

export default Drawer;
