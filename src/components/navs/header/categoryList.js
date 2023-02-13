import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
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

  const getCategories = (products) => {
    let categories = [];

    for (let i = 0; i < products.length; i++) {
      let category =
        products[i].category.charAt(0).toUpperCase() +
        products[i].category.slice(1);
      if (
        (!categories.includes(category) && gender === products[i].gender) ||
        (!categories.includes(category) && gender === "")
      ) {
        categories.push(category);
      }
    }
    // console.log("categoryNames ---", categories);

    return categories;
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
        ? getCategories(data).map((category, index) => (
            <motion.li key={index} onClick={(e) => showDrawer(e)}>
              <h3>{category}</h3>
            </motion.li>
          ))
        : getCategories(data).map((category, index) => (
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
