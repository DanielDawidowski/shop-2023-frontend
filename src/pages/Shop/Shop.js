import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { ShopStyles } from "./shopStyles";
import { Container } from "../../components/layout/layoutStyles";
import Layout from "../../components/layout/layout";
import { filterItems } from "../../functions/filter";
import ProductCard from "../../components/cards/productCard";
import { Icon } from "../../components/globalStyles/icon";
import data from "../../data.json";
import ShopFilters from "./shopFilters";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const Shop = () => {
  const [products] = useState(data);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(200);

  const [isToggled, setIsToggled] = useState(false);

  let { gender, category, sub_category, size, color, brand } = useSelector(
    (state) => ({
      ...state,
    })
  );

  const filteredItems = filterItems(
    products,
    gender,
    minValue,
    maxValue,
    category,
    sub_category,
    size,
    color,
    brand
  );

  return (
    <Layout>
      <Container>
        <ShopStyles>
          <motion.div className="filters">
            <motion.div
              className="filters__title"
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
            {isToggled && (
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  style={{ overflow: "hidden" }}
                  className="filters__main"
                >
                  <ShopFilters
                    {...{
                      minValue,
                      maxValue,
                      set_minValue,
                      set_maxValue,
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
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
