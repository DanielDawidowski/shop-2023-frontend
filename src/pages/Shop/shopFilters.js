import React from "react";
// import MultiRangeSlider from "multi-range-slider-react";
import { useSelector, useDispatch } from "react-redux";
import GenderFilter from "./filters/genderFilter";
import CategoryFilter from "./filters/categoryFilter";
import SubCategoryFilter from "./filters/subCategoryFilter";
import SizeFilter from "./filters/sizeFilter";
import ColorFilter from "./filters/colorFilter";
import BrandFilter from "./filters/brandFilter";

function ShopFilters({ minValue, maxValue, set_minValue, set_maxValue }) {
  let { gender, category, sub_category, size, color, brand } = useSelector(
    (state) => ({
      ...state,
    })
  );

  let dispatch = useDispatch();

  // const handlePrice = (e) => {
  //   set_minValue(e.minValue);
  //   set_maxValue(e.maxValue);
  // };

  return (
    <div className="filters__main--content">
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
      <GenderFilter
        {...{
          dispatch,
          gender,
        }}
      />
      <CategoryFilter
        {...{
          dispatch,
          gender,
          category,
        }}
      />
      <SubCategoryFilter
        {...{
          dispatch,
          gender,
          category,
          sub_category,
        }}
      />

      <SizeFilter
        {...{
          dispatch,
          gender,
          category,
          sub_category,
          size,
        }}
      />

      <ColorFilter
        {...{
          dispatch,
          gender,
          category,
          sub_category,
          size,
          color,
        }}
      />

      <BrandFilter
        {...{
          dispatch,
          gender,
          category,
          sub_category,
          size,
          color,
          brand,
        }}
      />
    </div>
  );
}

export default ShopFilters;
