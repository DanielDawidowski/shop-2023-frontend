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
import { Icon } from "../../components/globalStyles/icon";

function Product() {
  const [count, setCount] = useState(1);
  const [wishlist, setWishlist] = useState(true);

  let history = useHistory();
  const showProductID = (name) => name.split("/").pop();
  let productID = showProductID(history.location.pathname);

  // redux
  const { wish } = useSelector((state) => ({ ...state }));
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

      localStorage.setItem("cart", JSON.stringify(unique));

      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
    }
  };

  const handleAddToWishlist = () => {
    let wish = [];
    setWishlist(!wishlist);

    if (typeof window !== "undefined") {
      if (localStorage.getItem("wish")) {
        wish = JSON.parse(localStorage.getItem("wish"));
      }
    }

    let product = getProduct(data, productID).find((el) => el);
    if (wishlist === true) {
      wish.push({
        ...product,
      });
    } else {
      wish = wish.filter((el) => el.id !== product.id);
    }

    // remove duplicates
    let unique = _.uniqWith(wish, _.isEqual);

    localStorage.setItem("wish", JSON.stringify(unique));

    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: unique,
    });
  };

  let wishId = wish.map((w) => w.id);

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
                <div
                  className="product__image--wishlist"
                  onClick={handleAddToWishlist}
                >
                  {wishId.includes(product.id) ? (
                    <Icon viewBox="0 0 512 450">
                      <path
                        d="m449.28 121.43a115.2 115.2 0 0 0 -137.89-35.75c-21.18 9.14-40.07 24.55-55.39 45-15.32-20.5-34.21-35.91-55.39-45a115.2 115.2 0 0 0 -137.89 35.75c-16.5 21.62-25.22 48.64-25.22 78.13 0 42.44 25.31 89 75.22 138.44 40.67 40.27 88.73 73.25 113.75 89.32a54.78 54.78 0 0 0 59.06 0c25-16.07 73.08-49.05 113.75-89.32 49.91-49.42 75.22-96 75.22-138.44 0-29.49-8.72-56.51-25.22-78.13z"
                        fill="#f9595f"
                      />
                    </Icon>
                  ) : (
                    <Icon viewBox="-3 -4 22 22">
                      <path d="M14.37 2.56a3.92 3.92 0 0 0-3-1 4.1 4.1 0 0 0-1.82.52A9.18 9.18 0 0 0 8 3.06a9.35 9.35 0 0 0-1.49-1 3.85 3.85 0 0 0-1.77-.52A4.07 4.07 0 0 0 1.63 2.6 4 4 0 0 0 .35 5.52a3.83 3.83 0 0 0 .88 2.33 33.87 33.87 0 0 0 5.7 6.2l.39-.49-.38.49a1.67 1.67 0 0 0 1.06.42 1.71 1.71 0 0 0 1.08-.42 37.42 37.42 0 0 0 6.06-6.73 3.5 3.5 0 0 0 .47-1.74 4 4 0 0 0-1.24-3.02zm-.26 4.06a37.1 37.1 0 0 1-5.81 6.46.56.56 0 0 1-.28.13.51.51 0 0 1-.29-.14 32.77 32.77 0 0 1-5.49-5.94 2.74 2.74 0 0 1-.64-1.61 2.75 2.75 0 0 1 .88-2 2.79 2.79 0 0 1 2.16-.72h.1a2.73 2.73 0 0 1 1.19.38A10.23 10.23 0 0 1 7.24 4l.76.63.76-.63a9 9 0 0 1 1.34-.86 2.91 2.91 0 0 1 1.26-.39h.1a2.68 2.68 0 0 1 2.07.68 2.78 2.78 0 0 1 .87 2 2.18 2.18 0 0 1-.29 1.19z" />
                    </Icon>
                  )}
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
