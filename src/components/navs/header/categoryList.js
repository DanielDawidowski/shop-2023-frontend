import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getCategories } from "../../../functions/getCategories";
import data from "../../../data.json";

const CategoryList = ({
  setHovered,
  setSubCategory,
  setToggleDrawer,
  nav = false,
}) => {
  let { gender } = useSelector((state) => ({ ...state }));

  let dispatch = useDispatch();

  const setCategory = (category) => {
    // add to redux state
    dispatch({
      type: "CATEGORY",
      payload: category,
    });
    // console.log("category ---", category);
  };

  const showSubCategory = (e) => {
    setHovered(true);
    setSubCategory(e.target.innerText.toLowerCase());
    // console.log("showNavigation", e.target.innerText.toLowerCase());
  };

  const showDrawer = (e) => {
    setToggleDrawer(true);
    setCategory(e.target.innerText.toLowerCase());
  };

  const closeNavigation = () => {
    setHovered(false);
    // setSubCategory("");
  };

  return (
    <>
      {nav
        ? getCategories(data, gender).map((category, index) => (
            <motion.li key={index} onClick={(e) => showDrawer(e)}>
              <h3>{category}</h3>
            </motion.li>
          ))
        : getCategories(data, gender).map((category, index) => (
            <motion.li
              key={index}
              onHoverStart={(e) => showSubCategory(e)}
              onHoverEnd={() => closeNavigation()}
              onClick={() => setCategory(category.toLowerCase())}
            >
              <h3>{category}</h3>
            </motion.li>
          ))}
    </>
  );
};

export default CategoryList;