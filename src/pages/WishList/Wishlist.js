import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import { WishlistStyles } from "./wishlistStyles";
import Layout from "../../components/layout/layout";
import { Container } from "../../components/layout/layoutStyles";
import Image from "../../components/image/image";
import { Icon } from "../../components/globalStyles/icon";
import data from "../../data.json";
import { getProduct } from "../../functions/getProduct";

function Wishlist() {
  const dispatch = useDispatch();
  const { wish } = useSelector((state) => ({ ...state }));

  const handleAddToCart = (id) => {
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      // let wishId = wish.map((w) => w.id);

      let product = getProduct(data, id.toString()).find((el) => el.id === id);

      console.log("product --->", product);

      cart.push({
        ...product,
        count: 1,
      });

      let unique = _.uniqWith(cart, _.isEqual);
      localStorage.setItem("cart", JSON.stringify(unique));

      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });

      unique.map((p) => {
        if (p.id === id) {
          handleRemoveFromWishlist(id);
        }
      });
    }
  };

  const handleRemoveFromWishlist = (id) => {
    let wish = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("wish")) {
        wish = JSON.parse(localStorage.getItem("wish"));
      }
      wish.map((product, i) => {
        if (product.id === id) {
          wish.splice(i, 1);
        }
      });
      localStorage.setItem("wish", JSON.stringify(wish));
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: wish,
      });
    }
  };

  return (
    <Layout>
      <Container>
        <WishlistStyles>
          <ul className="wish__list">
            {wish.map((w, i) => (
              <li className="wish__list--item" key={i}>
                <div className="wish__item--image">
                  <Link to={`/product/${w.id}`}>
                    <Image src={w.img} alt={w.name} />
                  </Link>
                </div>
                <div className="wish__content">
                  <div className="wish__content--top">
                    <h3>{w.mark}</h3>
                    {/* <b>id: {w.id}</b> */}
                    <b>$ {w.price}</b>
                  </div>
                  <div className="wish__content--bottom">
                    <Link to={`/product/${w.id}`}>
                      <h2>
                        <b>{w.name}</b>
                      </h2>
                    </Link>
                    <div className="wish__content--icons">
                      <div onClick={() => handleAddToCart(w.id)}>
                        <Icon viewBox="-150.5 -200.5 1440 1440">
                          <path d="M800.8 952c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56z m-448 0c-31.2 0-56-24.8-56-56s24.8-56 56-56 56 24.8 56 56-25.6 56-56 56zM344 792c-42.4 0-79.2-33.6-84-76l-54.4-382.4-31.2-178.4c-2.4-19.2-19.2-35.2-37.6-35.2H96c-13.6 0-24-10.4-24-24s10.4-24 24-24h40.8c42.4 0 80 33.6 85.6 76l31.2 178.4 54.4 383.2C309.6 728 326.4 744 344 744h520c13.6 0 24 10.4 24 24s-10.4 24-24 24H344z m40-128c-12.8 0-23.2-9.6-24-22.4-0.8-6.4 1.6-12.8 5.6-17.6s10.4-8 16-8l434.4-32c19.2 0 36-15.2 38.4-33.6l50.4-288c1.6-13.6-2.4-28-10.4-36.8-5.6-6.4-12.8-9.6-21.6-9.6H320c-13.6 0-24-10.4-24-24s10.4-24 24-24h554.4c22.4 0 42.4 9.6 57.6 25.6 16.8 19.2 24.8 47.2 21.6 75.2l-50.4 288c-4.8 41.6-42.4 74.4-84 74.4l-432 32c-1.6 0.8-2.4 0.8-3.2 0.8z" />
                        </Icon>
                      </div>
                      <div onClick={() => handleRemoveFromWishlist(w.id)}>
                        <Icon viewBox="0 0 512 512" red="true" noborder="false">
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
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </WishlistStyles>
      </Container>
    </Layout>
  );
}

export default Wishlist;
