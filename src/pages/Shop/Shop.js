import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  const [cat, setCat] = useState("");
  const [subCat, setSubCat] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [brands, setBrands] = useState([]);

  let shoes;

  let { gender } = useSelector((state) => ({
    ...state,
  }));

  const filteredItems = filterItems(
    products,
    gender,
    minValue,
    maxValue,
    cat,
    subCat,
    sizes,
    colors,
    brands
  );

  return (
    <Layout>
      <Container>
        <ShopStyles>
          <div className="media--query--small">
            <ShopFilters
              {...{
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
                shoes,
              }}
              mediaQuery
            />
          </div>

          <div className="media--query--big">
            <ShopFilters
              {...{
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
                shoes,
              }}
            />
          </div>

          <div className="main__shop">
            <div className="main__shop--inner">
              {filteredItems.map((product, i) => {
                return <ProductCard key={i} product={product} />;
              })}
            </div>
          </div>
        </ShopStyles>
      </Container>
    </Layout>
  );
};

export default Shop;
