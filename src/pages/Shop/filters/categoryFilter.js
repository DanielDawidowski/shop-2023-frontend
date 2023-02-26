import React from "react";
import { motion } from "framer-motion";
import { getCategories } from "../../../functions/getCategories";
import data from "../../../data.json";

function CategoryFilter({ dispatch, gender, category }) {
  const handleCategory = (e) => {
    let justChecked = e.target.value;
    dispatch({
      type: "SIZE",
      payload: [],
    });
    dispatch({
      type: "COLOR",
      payload: [],
    });
    dispatch({
      type: "BRAND",
      payload: [],
    });
    dispatch({
      type: "CATEGORY",
      payload: justChecked,
    });
    dispatch({
      type: "SUB_CATEGORY",
      payload: [],
    });
    // console.log("category---", justChecked);
  };

  return (
    <motion.div className="filter__option">
      <h3>Categories</h3>
      {getCategories(data, gender).map((c, i) => {
        return (
          <div className="filter__option--item" key={i}>
            <input
              id={c}
              type="radio"
              name={c}
              value={c.toLowerCase()}
              onChange={(e) => handleCategory(e)}
              checked={c.toLowerCase() === category}
            />
            <label htmlFor={c} name={c}>
              {c}
            </label>
          </div>
        );
      })}
    </motion.div>
  );
}

export default CategoryFilter;
