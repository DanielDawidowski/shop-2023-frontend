import React from "react";
import { motion } from "framer-motion";
import { getColors } from "../../../functions/getColors";
import data from "../../../data.json";

function ColorFilter({
  dispatch,
  gender,
  category,
  size,
  color,
  sub_category,
}) {
  const handleColors = (e) => {
    if (!e.target.checked) {
      dispatch({
        type: "BRAND",
        payload: [],
      });
    }
    if (e.target.checked) {
      dispatch({
        type: "COLOR",
        payload: [...color, e.target.value],
      });
    } else {
      dispatch({
        type: "SIZE",
        payload: color.filter(
          (productColor) => productColor !== e.target.value
        ),
      });
    }
  };
  return (
    <motion.div className="filter__option">
      {size.length > 0 && <h3>Colors</h3>}
      {getColors(data, gender, category, sub_category, size).map((c, i) => {
        return (
          <div className="filter__option--item" key={i}>
            <input
              id={c}
              type="checkbox"
              name={c}
              value={c.toLowerCase()}
              onChange={(e) => handleColors(e)}
              checked={color.includes(c)}
            />
            <label htmlFor={c}>{c}</label>
          </div>
        );
      })}
    </motion.div>
  );
}

export default ColorFilter;
