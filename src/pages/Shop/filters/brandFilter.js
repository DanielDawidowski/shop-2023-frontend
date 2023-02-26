import React from "react";
import { motion } from "framer-motion";
import { getBrands } from "../../../functions/getBrands";
import data from "../../../data.json";

function BrandFilter({
  dispatch,
  gender,
  category,
  sub_category,
  size,
  color,
  brand,
}) {
  const handleBrands = (e) => {
    if (e.target.checked) {
      dispatch({
        type: "BRAND",
        payload: [...brand, e.target.value],
      });
    } else {
      dispatch({
        type: "BRAND",
        payload: brand.filter(
          (productBrand) => productBrand !== e.target.value
        ),
      });
    }
  };
  return (
    <motion.div className="filter__option">
      {color.length > 0 && <h3>Brands</h3>}
      {getBrands(data, gender, category, sub_category, size, color).map(
        (b, i) => {
          return (
            <div className="filter__option--item" key={i}>
              <input
                id={b}
                type="checkbox"
                name={b}
                value={b.toLowerCase()}
                onChange={(e) => handleBrands(e)}
                checked={brand.includes(b)}
              />
              <label htmlFor={b}>{b}</label>
            </div>
          );
        }
      )}
    </motion.div>
  );
}

export default BrandFilter;
