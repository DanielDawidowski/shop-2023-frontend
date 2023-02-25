import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getCategories } from "../../../functions/getCategories";
import data from "../../../data.json";

const CategoryList = ({
  setHovered,
  setToggleDrawer,
  setCategoryHovered,
  nav = false,
}) => {
  let { gender } = useSelector((state) => ({
    ...state,
  }));

  let dispatch = useDispatch();

  const setCategory = (category) => {
    // add to redux state
    // path !== "shop" &&
    dispatch({
      type: "CATEGORY",
      payload: category,
    });
    dispatch({
      type: "SUB_CATEGORY",
      payload: [],
    });

    // console.log("category ---", category);
  };

  const showSubCategory = (e) => {
    setHovered(true);
    setCategoryHovered(e.target.innerText.toLowerCase());
    // console.log("showNavigation", e.target.innerText.toLowerCase());
  };

  const showDrawer = (e) => {
    setToggleDrawer(true);
    setCategory(e.target.innerText.toLowerCase());
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
            <Link
              to="/shop"
              key={index}
              onClick={() => setCategory(category.toLowerCase())}
            >
              <motion.li
                onHoverStart={(e) => showSubCategory(e)}
                onHoverEnd={() => setHovered(false)}
                style={{ cursor: "pointer" }}
              >
                <h3>{category}</h3>
              </motion.li>
            </Link>
          ))}
    </>
  );
};

export default CategoryList;
