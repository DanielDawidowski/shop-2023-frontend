import React from "react";
import { motion } from "framer-motion";
import { getSubCategories } from "../../../functions/getSubCategories";
import data from "../../../data.json";

function SubCategoryFilter({ dispatch, gender, category, sub_category }) {
  const handleSubCategory = (e) => {
    if (!e.target.checked) {
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
    }
    if (e.target.checked) {
      dispatch({
        type: "SUB_CATEGORY",
        payload: [...sub_category, e.target.value],
      });
    } else {
      dispatch({
        type: "SUB_CATEGORY",
        payload: sub_category.filter(
          (subCategory) => subCategory !== e.target.value
        ),
      });
    }
  };
  return (
    <motion.div className="filter__option">
      {category === "" || (category && <h3>Sub Categories</h3>)}
      {category &&
        getSubCategories(data, gender, category).map((sub, i) => {
          return (
            <div className="filter__option--item" key={i}>
              <input
                id={sub}
                type="checkbox"
                name={sub}
                value={sub.toLowerCase()}
                onChange={(e) => handleSubCategory(e)}
                checked={
                  sub_category.includes(sub.toLowerCase()) ||
                  sub.toLowerCase() === sub_category
                }
              />
              {/* {console.log("sub ----", sub)} */}
              <label htmlFor={sub}>{sub}</label>
            </div>
          );
        })}
    </motion.div>
  );
}

export default SubCategoryFilter;
