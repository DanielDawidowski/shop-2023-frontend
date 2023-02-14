import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MultiRangeSlider from "multi-range-slider-react";
import { ShopStyles } from "./shopStyles";
import { Container } from "../../components/layout/layoutStyles";
import Layout from "../../components/layout/layout";
import { filterItems } from "../../functions/filter";
import data from "../../data.json";

const Shop = () => {
  const [products] = useState(data);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(200);

  let dispatch = useDispatch();
  let { gender } = useSelector((state) => ({ ...state }));

  const setGender = (gender) => {
    // add to redux state
    dispatch({
      type: "GENDER",
      payload: gender,
    });
    // console.log("gender ---", gender);
  };

  const handlePrice = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const filteredItems = filterItems(
    products,
    gender,
    minValue,
    maxValue

    // starNumbers
  );

  return (
    <Layout>
      <Container>
        <ShopStyles>
          <div className="main-filters">
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
          <div className="main-shop">
            {filteredItems.map((product) => (
              <div key={product.id}>
                <h2>{product.name}</h2>
                <h3>{product.gender}</h3>
              </div>
            ))}
          </div>
        </ShopStyles>
      </Container>
    </Layout>
  );
};

export default Shop;
