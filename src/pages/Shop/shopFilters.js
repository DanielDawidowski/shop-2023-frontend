import React from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../functions/getCategories";
import { getSubCategories } from "../../functions/getSubCategories";
import { getSizes } from "../../functions/getSizes";
import { getColors } from "../../functions/getColors";
import { getBrands } from "../../functions/getBrands";

import data from "../../data.json";

function ShopFilters({
  minValue,
  maxValue,
  cat,
  subCat,
  sizes,
  colors,
  brands,
  set_minValue,
  set_maxValue,
  setCat,
  setSubCat,
  setSizes,
  setColors,
  setBrands,
  shoes,
}) {
  let { gender, category, sub_category } = useSelector((state) => ({
    ...state,
  }));

  let dispatch = useDispatch();

  const handlePrice = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const handleCategory = (e) => {
    let justChecked = e.target.value;
    setCat(justChecked);
    setSubCat([]);
    setSizes([]);
    setColors([]);
    setBrands([]);
    dispatch({
      type: "CATEGORY",
      payload: justChecked,
    });
    dispatch({
      type: "SUB_CATEGORY",
      payload: "",
    });
    // console.log("category---", justChecked);
  };
  // console.log("sub_category---", sub_category);

  const handleSubCategory = (e) => {
    if (!e.target.checked) {
      setSizes([]);
      setColors([]);
      setBrands([]);
    }
    if (e.target.checked) {
      setSubCat([...subCat, e.target.value]);
      dispatch({
        type: "SUB_CATEGORY",
        payload: [...subCat, e.target.value],
      });
    } else {
      setSubCat(subCat.filter((subCategory) => subCategory !== e.target.value));
      dispatch({
        type: "SUB_CATEGORY",
        payload: subCat.filter((subCategory) => subCategory !== e.target.value),
      });
    }
  };

  const handleSize = (e) => {
    if (!e.target.checked) {
      setColors([]);
      setBrands([]);
    }
    if (e.target.checked) {
      setSizes([...sizes, e.target.value]);
    } else {
      setSizes(sizes.filter((productSize) => productSize !== e.target.value));
    }
  };

  const handleColors = (e) => {
    if (!e.target.checked) {
      setBrands([]);
    }
    if (e.target.checked) {
      setColors([...colors, e.target.value]);
    } else {
      setColors(
        colors.filter((productColor) => productColor !== e.target.value)
      );
    }
  };

  const handleBrands = (e) => {
    if (e.target.checked) {
      setBrands([...brands, e.target.value]);
    } else {
      setBrands(
        brands.filter((productBrand) => productBrand !== e.target.value)
      );
    }
  };

  return (
    <div className="main__filters">
      {/* <motion.div className="filter__option">
        <h3>Price</h3>
        <MultiRangeSlider
          min={0}
          max={200}
          step={5}
          minValue={minValue}
          maxValue={maxValue}
          onChange={(e) => {
            handlePrice(e);
          }}
          labels={[minValue, maxValue]}
          preventWheel={true}
          ruler={false}
        />
      </motion.div> */}

      <br />
      <br />
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
                checked={c.toLowerCase() === cat}
              />
              <label htmlFor={c} name={c}>
                {c}
              </label>
            </div>
          );
        })}
      </motion.div>

      <br />
      <br />
      {category && (
        <AnimatePresence>
          <motion.div className="filter__option">
            {category && <h3>Sub Categories</h3>}
            {getSubCategories(data, gender, category).map((sub, i) => {
              return (
                <div className="filter__option--item" key={i}>
                  <input
                    id={sub}
                    type="checkbox"
                    name={sub}
                    value={sub.toLowerCase()}
                    onChange={(e) => handleSubCategory(e)}
                    checked={subCat.includes(sub.toLowerCase())}
                  />
                  <label htmlFor={sub}>{sub}</label>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      )}

      <br />
      <br />
      <motion.div className="filter__option">
        {sub_category.length > 0 && <h3>Sizes</h3>}
        {sub_category &&
          getSizes(data, gender, category, sub_category).map(
            (productSize, i) => {
              return (
                <div className="filter__option--item" key={i}>
                  <input
                    id={productSize}
                    type="checkbox"
                    name={productSize}
                    value={productSize}
                    onChange={(e) => handleSize(e)}
                    checked={sizes.includes(productSize.toString())}
                  />
                  <label htmlFor={productSize}>{productSize}</label>
                </div>
              );
            }
          )}
      </motion.div>

      <br />
      <br />
      <motion.div className="filter__option">
        {sizes.length > 0 && <h3>Colors</h3>}
        {getColors(data, gender, category, sub_category, sizes).map(
          (color, i) => {
            return (
              <div className="filter__option--item" key={i}>
                <input
                  id={color}
                  type="checkbox"
                  name={color}
                  value={color.toLowerCase()}
                  onChange={(e) => handleColors(e)}
                  checked={colors.includes(color)}
                />
                <label htmlFor={color}>{color}</label>
              </div>
            );
          }
        )}
      </motion.div>

      <br />
      <br />
      <motion.div className="filter__option">
        {colors.length > 0 && <h3>Brands</h3>}
        {getBrands(data, gender, category, sub_category, sizes, colors).map(
          (brand, i) => {
            return (
              <div className="filter__option--item" key={i}>
                <input
                  id={brand}
                  type="checkbox"
                  name={brand}
                  value={brand.toLowerCase()}
                  onChange={(e) => handleBrands(e)}
                  checked={brands.includes(brand)}
                />
                <label htmlFor={brand}>{brand}</label>
              </div>
            );
          }
        )}
      </motion.div>
    </div>
  );
}

export default ShopFilters;
