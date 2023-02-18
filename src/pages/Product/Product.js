import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import Layout from "../../components/layout/layout";
import { ProductStyles } from "./productStyles";
import Image from "../../components/image/image";
import data from "../../data.json";
import { getProduct } from "../../functions/getProduct";

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
      <ProductStyles>
        {getProduct(data, productID).map((product, i) => (
          <div key={i}>
            <div className="product__card--image">
              <Image src={product.img} alt={product.name} />
            </div>
            <h3>{product.id}</h3>
            <h1>{product.name}</h1>
            <h3>gender: {product.gender}</h3>
            <h3>category: {product.category}</h3>
            <h3>sub: {product.sub_category}</h3>
            <h3>price: {product.price} $</h3>
            <h3>size: {product.size} </h3>
            <h3>color: {product.color} </h3>
            <h3>brand: {product.mark} </h3>
            <span>{cart.length}</span>
          </div>
        ))}
        <button onClick={handleAddToCart}>Add to Cart</button>
      </ProductStyles>
    </Layout>
  );
}

export default Product;
