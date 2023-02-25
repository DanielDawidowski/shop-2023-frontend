import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShopStyles } from "./shopStyles";
import { Container } from "../../components/layout/layoutStyles";
import Layout from "../../components/layout/layout";
import { filterItems } from "../../functions/filter";
import ProductCard from "../../components/cards/productCard";

import data from "../../data.json";
import ShopFilters from "./shopFilters";

const Shop = () => {
  const [products] = useState(data);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(200);
  const [gen, setGen] = useState("");

  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);

  let shoes;

  let { gender, category, sub_category } = useSelector((state) => ({
    ...state,
  }));

  const filteredItems = filterItems(
    products,
    gender,
    minValue,
    maxValue,
    category,
    sub_category,
    sizes,
    colors,
    brands
  );

  return (
    <Layout>
      <Container>
        <ShopStyles>
          <ShopFilters
            {...{
              minValue,
              maxValue,
              gen,
              setGen,
              sizes,
              colors,
              brands,
              set_minValue,
              set_maxValue,
              setSizes,
              setColors,
              setBrands,
              shoes,
            }}
          />

          <div className="main__shop">
            <div className="main__shop--inner">
              {filteredItems.map((product, i) => {
                return <ProductCard product={product} key={i} />;
              })}
            </div>
          </div>
        </ShopStyles>
      </Container>
    </Layout>
  );
};

export default Shop;
