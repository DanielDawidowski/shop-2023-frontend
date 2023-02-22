import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import Layout from "../../components/layout/layout";
import { Container } from "../../components/layout/layoutStyles";
import { CartStyles } from "./cartStyles";
import Image from "../../components/image/image";
import { Icon } from "../../components/globalStyles/icon";
import { getProduct } from "../../functions/getProduct";
import data from "../../data.json";

function Cart() {
  const [wishlist, setWishlist] = useState(false);
  const dispatch = useDispatch();
  const { cart, wish } = useSelector((state) => ({ ...state }));

  const getTotalPrice = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const getCartLength = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count;
    }, 0);
  };

  const getTotalOfSameProduct = (id) => {
    return cart.reduce((currentValue, nextValue) => {
      if (nextValue.id === id) {
        return currentValue + nextValue.count * nextValue.price;
      } else {
        return currentValue;
      }
    }, 0);
  };

  const increaseCount = (id) => {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product.id === id) {
          cart[i].count = cart[i].count + 1;
        }
        return cart;
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const decreaseCount = (id) => {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product.id === id) {
          cart[i].count = cart[i].count - 1;
        }
        if (cart[i].count === 0) {
          cart.splice(i, 1);
        }
        return cart;
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const removeProduct = (id) => {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product.id === id) {
          cart.splice(i, 1);
        }
        return cart;
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleAddToWishlist = (id) => {
    let wish = [];
    setWishlist(!wishlist);

    if (typeof window !== "undefined") {
      if (localStorage.getItem("wish")) {
        wish = JSON.parse(localStorage.getItem("wish"));
      }
    }
    let product = getProduct(data, id.toString()).find((el) => el.id === id);

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
        <CartStyles>
          <ul className="cart__list">
            {cart.map((p, i) => (
              <li className="cart__list--item" key={i}>
                <div className="cart__item--image">
                  <Link to={`/product/${p.id}`}>
                    <Image src={p.img} alt={p.name} />
                  </Link>
                </div>
                <div className="cart__item--content">
                  <div className="cart__content--header">
                    <div className="cart__content--title">
                      <h3>{p.mark}</h3>
                      <Link to={`/product/${p.id}`}>
                        <h2>
                          <b>{p.name}</b>
                        </h2>
                      </Link>
                    </div>
                    <b>$ {getTotalOfSameProduct(p.id).toFixed(2)}</b>
                  </div>

                  <div className="cart__content--content">
                    <ul className="cart__content--counts">
                      {p.count === 1 ? (
                        <li onClick={() => removeProduct(p.id)}>
                          <Icon
                            viewBox="0 0 512 512"
                            white="false"
                            noborder="false"
                          >
                            <path
                              d="M62.205,150l26.569,320.735C90.678,493.865,110.38,512,133.598,512h244.805c23.218,0,42.92-18.135,44.824-41.265
        L449.795,150H62.205z M180.986,452c-7.852,0-14.458-6.108-14.956-14.063l-15-242c-0.513-8.276,5.771-15.395,14.033-15.908
        c8.569-0.601,15.381,5.757,15.908,14.033l15,242C196.502,444.632,189.721,452,180.986,452z M271,437c0,8.291-6.709,15-15,15
        c-8.291,0-15-6.709-15-15V195c0-8.291,6.709-15,15-15s15,6.709,15,15V437z M360.97,195.938l-15,242
        c-0.493,7.874-7.056,14.436-15.908,14.033c-8.262-0.513-14.546-7.632-14.033-15.908l15-242
        c0.513-8.276,7.764-14.297,15.908-14.033C355.199,180.543,361.483,187.662,360.97,195.938z"
                            />
                            <path
                              d="M451,60h-90V45c0-24.814-20.186-45-45-45H196c-24.814,0-45,20.186-45,45v15H61c-16.569,0-30,13.431-30,30
        c0,16.567,13.431,30,30,30c137.966,0,252.039,0,390,0c16.569,0,30-13.433,30-30C481,73.431,467.569,60,451,60z M331,60H181V45
        c0-8.276,6.724-15,15-15h120c8.276,0,15,6.724,15,15V60z"
                            />
                          </Icon>
                        </li>
                      ) : (
                        <li onClick={() => decreaseCount(p.id)}>
                          <h3>
                            <b>-</b>
                          </h3>
                        </li>
                      )}
                      <li>
                        <h3>
                          <b>{p.count}</b>
                        </h3>
                      </li>
                      <li onClick={() => increaseCount(p.id)}>
                        <h3>
                          <b>+</b>
                        </h3>
                      </li>
                    </ul>
                    <div
                      className="cart__content--heart"
                      onClick={() => handleAddToWishlist(p.id)}
                    >
                      {wishId.includes(p.id) ? (
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
                </div>
              </li>
            ))}
          </ul>
          <div className="cart__checkout">
            <h2>
              <b>Checkout</b>
            </h2>
            <ul className="cart__checkout--list">
              <li className="cart__checkout--item">
                <h3>Total Products:({getCartLength()})</h3>
                <b>$ {getTotalPrice().toFixed(2)}</b>
              </li>
              <li className="cart__checkout--item">
                <h3>Sending costs:</h3>
                <b>$ 0.00</b>
              </li>
              <li className="cart__checkout--item">
                <h3>Total costs:</h3>
                <b>$ {getTotalPrice().toFixed(2)}</b>
              </li>
              <button className="btn--checkout">
                <b>Checkout</b>
              </button>
            </ul>
          </div>
        </CartStyles>
      </Container>
    </Layout>
  );
}

export default Cart;
