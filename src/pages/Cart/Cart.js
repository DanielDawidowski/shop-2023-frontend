import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/layout/layout";
import { Container } from "../../components/layout/layoutStyles";
import { CartStyles } from "./cartStyles";
import Image from "../../components/image/image";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => ({ ...state }));

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
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (
    <Layout>
      <Container>
        <CartStyles>
          <div>
            {cart.map((p, i) => (
              <div key={i}>
                <div className="product__card--image">
                  <Image src={p.img} alt={p.name} />
                </div>
                <h3>{p.id}</h3>
                <h1>{p.name}</h1>
                <h3>gender: {p.gender}</h3>
                <div>
                  <button onClick={() => increaseCount(p.id)}>+1</button>
                </div>
                <div>
                  <button onClick={() => decreaseCount(p.id)}>-1</button>
                </div>
                <div>
                  <button onClick={() => removeProduct(p.id)}>remove</button>
                </div>
                <h3>count: {p.count}</h3>
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
          <br />
          <div>Total price:{getTotalPrice()}</div>
          <br />
          <br />
          <br />
          <br />
          <div>Cart length:{getCartLength()}</div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </CartStyles>
      </Container>
    </Layout>
  );
}

export default Cart;
