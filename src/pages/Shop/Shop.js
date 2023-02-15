import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MultiRangeSlider from "multi-range-slider-react";
import { ShopStyles } from "./shopStyles";
import { Container } from "../../components/layout/layoutStyles";
import Layout from "../../components/layout/layout";
import { filterItems } from "../../functions/filter";
import { getCategories } from "../../functions/getCategories";
import { getSizes } from "../../functions/getSizes";
import { getSubCategories } from "../../functions/getSubCategories";
import data from "../../data.json";
import { AnimatePresence } from "framer-motion";

const Shop = () => {
  const [products] = useState(data);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(200);
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState([]);
  const [size, setSize] = useState([]);

  let dispatch = useDispatch();
  let { gender, category, sub_category } = useSelector((state) => ({
    ...state,
  }));

  const handlePrice = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const handleCategory = (e) => {
    let justChecked = e.target.value;
    setCat(justChecked);
    dispatch({
      type: "CATEGORY",
      payload: justChecked,
    });
    // console.log("category---", justChecked);
  };

  const handleSubCategory = (e) => {
    if (e.target.checked) {
      setSubCat([...subCat, e.target.value]);
    } else {
      setSubCat(subCat.filter((subCategory) => subCategory !== e.target.value));
    }
  };

  const handleSize = (e) => {
    if (e.target.checked) {
      setSize([...size, e.target.value]);
    } else {
      setSize(size.filter((sizes) => sizes !== e.target.value));
    }
  };

  const filteredItems = filterItems(
    products,
    gender,
    minValue,
    maxValue,
    cat,
    subCat,
    size
  );

  let shoes;

  return (
    <Layout>
      <Container>
        <ShopStyles>
          <div className="main-filters">
            <div className="filter__option">
              <MultiRangeSlider
                min={0}
                max={200}
                step={5}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                  handlePrice(e);
                }}
                labels={[minValue, maxValue]}
                preventWheel={true}
                ruler={false}
              />
            </div>
            {/* {!category && ( */}

            <div className="filter__option">
              {getCategories(data, gender).map((c, i) => {
                return (
                  <div className="filter__option--checkbox" key={i}>
                    <input
                      id={c}
                      type="checkbox"
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
            </div>
            {/* )} */}
            <br />
            <br />
            <br />
            <br />
            <AnimatePresence>
              <div className="filter__option">
                {getSubCategories(data, category, gender).map((sub, i) => {
                  return (
                    <div className="filter__option--checkbox" key={i}>
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
              </div>
            </AnimatePresence>
            <br />
            <br />
            <br />
            <br />
            <div className="filter__option">
              {category === "shoes"
                ? getSizes(data, (shoes = true)).map((sizeProduct, i) => {
                    return (
                      <div className="filter__option--checkbox" key={i}>
                        <input
                          id={sizeProduct}
                          type="checkbox"
                          name={sizeProduct}
                          value={sizeProduct.toString()}
                          onChange={(e) => handleSize(e)}
                          checked={size.includes(sizeProduct.toString())}
                        />
                        <label htmlFor={sizeProduct}>{sizeProduct}</label>
                      </div>
                    );
                  })
                : getSizes(data).map((sizeProduct, i) => {
                    return (
                      <div className="filter__option--checkbox" key={i}>
                        <input
                          id={sizeProduct}
                          type="checkbox"
                          name={sizeProduct}
                          value={sizeProduct.toString()}
                          onChange={(e) => handleSize(e)}
                          checked={size.includes(sizeProduct.toString())}
                        />
                        <label htmlFor={sizeProduct}>{sizeProduct}</label>
                      </div>
                    );
                  })}
            </div>
          </div>

          <div className="main-shop">
            {filteredItems.map((product) => (
              <div key={product.id}>
                <h2>{product.name}</h2>
                <h3>gender: {product.gender}</h3>
                <h3>category: {product.category}</h3>
                <h3>sub: {product.sub_category}</h3>
                <h3>price: {product.price} $</h3>
                <h3>size: {product.size} </h3>
              </div>
            ))}
          </div>
        </ShopStyles>
      </Container>
    </Layout>
  );
};

export default Shop;
