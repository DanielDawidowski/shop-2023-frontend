import React from "react";
import { motion } from "framer-motion";
import { getSizes } from "../../../functions/getSizes";
import data from "../../../data.json";

function SizeFilter({ dispatch, gender, category, sub_category, size }) {
  const handleSize = (e) => {
    if (!e.target.checked) {
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
        type: "SIZE",
        payload: [...size, e.target.value],
      });
    } else {
      dispatch({
        type: "SIZE",
        payload: size.filter((productSize) => productSize !== e.target.value),
      });
    }
  };
  return (
    <motion.div className="filter__option">
      {sub_category.length > 0 && <h3>Sizes</h3>}
      {sub_category &&
        getSizes(data, gender, category, sub_category).map((productSize, i) => {
          return (
            <div className="filter__option--item" key={i}>
              <input
                id={productSize}
                type="checkbox"
                name={productSize}
                value={productSize}
                onChange={(e) => handleSize(e)}
                checked={size.includes(productSize.toString())}
              />
              <label htmlFor={productSize}>{productSize}</label>
            </div>
          );
        })}
    </motion.div>
  );
}

export default SizeFilter;
