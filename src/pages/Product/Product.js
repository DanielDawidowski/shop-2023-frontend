import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import Layout from "../../components/layout/layout";
import { ProductStyles } from "./productStyles";
import Image from "../../components/image/image";
import data from "../../data.json";
import { getProduct } from "../../functions/getProduct";
import { Container } from "../../components/layout/layoutStyles";
import { GoBackButton } from "../../components/buttons/goBack/back";
import { Wishlist } from "../../components/buttons/wishlist/wishlist";

function Product() {
  const [count, setCount] = useState(1);
  let history = useHistory();

  const showProductID = (name) => name.split("/").pop();

  let productID = showProductID(history.location.pathname);

  // redux
  const { cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setCount(count + 1);
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      let product = getProduct(data, productID).find((el) => el);
      // console.log("price ---", product.price);
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === product.id) {
          cart[i].count = count;
        }
      }
      cart.push({
        ...product,
        count: count,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      console.log("unique", unique);

      localStorage.setItem("cart", JSON.stringify(unique));

      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
    }
  };

  return (
    <Layout>
      <Container>
        <ProductStyles>
          {getProduct(data, productID).map((product, i) => (
            <div key={i} className="product">
              <div className="product__image">
                <div className="product__image--back">
                  <GoBackButton />
                </div>
                <Image src={product.img} alt={product.name} />
                <div className="product__image--wishlist">
                  <Wishlist />
                </div>
              </div>
              <div className="product__content">
                <div className="product__content--title">
                  <h4>Brand: {product.mark}</h4>
                  <h2>
                    <b>{product.name}</b>
                  </h2>
                  <h1>
                    <b>$ {product.price}</b>
                  </h1>
                  <h3>Available sizes: {product.size} </h3>
                </div>
                <div className="product__content--color">
                  <h4>
                    color:
                    <span style={{ color: `${product.color}` }}>
                      <b>{product.color.toUpperCase()}</b>
                    </span>
                  </h4>
                </div>
                <div className="product__content--add">
                  <button onClick={handleAddToCart}>
                    <b>Add to Cart</b>
                    {/* <small>{product.count === 0 && <b>Add to Cart</b>}</small> */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ProductStyles>
      </Container>
    </Layout>
  );
}

export default Product;
