import React, { useState } from "react";
// import MultiRangeSlider from "multi-range-slider-react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../functions/getCategories";
import { getSubCategories } from "../../functions/getSubCategories";
import { getSizes } from "../../functions/getSizes";
import { getColors } from "../../functions/getColors";
import { getBrands } from "../../functions/getBrands";
import { Icon } from "../../components/globalStyles/icon";
import data from "../../data.json";

const genderArr = ["Men", "Women", "Kids"];

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

function ShopFilters({
  minValue,
  maxValue,
  gen,
  setGen,
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
  mediaQuery,
}) {
  const [isToggled, setIsToggled] = useState(false);
  let { gender, category, sub_category } = useSelector((state) => ({
    ...state,
  }));

  let dispatch = useDispatch();

  // const handlePrice = (e) => {
  //   set_minValue(e.minValue);
  //   set_maxValue(e.maxValue);
  // };

  const handleGender = (e) => {
    let justChecked = e.target.value;
    if (typeof window !== "undefined") {
      if (localStorage.getItem("gender")) {
        gender = JSON.parse(localStorage.getItem("gender"));
      }

      localStorage.setItem("gender", JSON.stringify(justChecked));
      dispatch({
        type: "GENDER",
        payload: justChecked,
      });
      dispatch({
        type: "CATEGORY",
        payload: "",
      });
      dispatch({
        type: "SUB_CATEGORY",
        payload: "",
      });
      setGen(justChecked);
      setCat("");
      setSubCat([]);
      setSizes([]);
      setColors([]);
      setBrands([]);
    }
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
      <motion.div
        className="filters--title"
        role="button"
        onClick={() => setIsToggled((prevState) => !prevState)}
      >
        <h3>Filters</h3>
        <motion.div animate={{ rotate: isToggled ? 180 : 0 }}>
          <Icon viewBox="0 0 451.847 451.847" noborder="true">
            <path
              d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
            c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
            c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
            />
          </Icon>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ overflow: "hidden" }}
            className="filters--content"
          >
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
              <h3>Gender</h3>
              {genderArr.map((g, i) => {
                return (
                  <div className="filter__option--item" key={i}>
                    <input
                      id={g}
                      type="radio"
                      name={g}
                      value={g.toLowerCase()}
                      onChange={(e) => handleGender(e)}
                      checked={g.toLowerCase() === gender}
                    />
                    <label htmlFor={g} name={g}>
                      {g}
                    </label>
                  </div>
                );
              })}
            </motion.div>

            <br />
            <br />

            <motion.div className="filter__option">
              <h3>Categories</h3>
              {gender &&
                getCategories(data, gender).map((c, i) => {
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

            <motion.div className="filter__option">
              {category && <h3>Sub Categories</h3>}
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
                        checked={subCat.includes(sub.toLowerCase())}
                      />
                      <label htmlFor={sub}>{sub}</label>
                    </div>
                  );
                })}
            </motion.div>

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
              {getBrands(
                data,
                gender,
                category,
                sub_category,
                sizes,
                colors
              ).map((brand, i) => {
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
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ShopFilters;
