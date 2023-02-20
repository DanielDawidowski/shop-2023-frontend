import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { WishlistStyles } from "./wishlistStyles";
import Layout from "../../components/layout/layout";
import { Container } from "../../components/layout/layoutStyles";
import Image from "../../components/image/image";

function Wishlist() {
  const dispatch = useDispatch();
  const { wish } = useSelector((state) => ({ ...state }));

  return (
    <Layout>
      <Container>
        <WishlistStyles>
          <h1>Wishlist</h1>
          <ul className="cart__list">
            {wish.map((w, i) => (
              <li className="cart__list--item" key={i}>
                <h1>{w.name}</h1>
                <Link to={`/product/${w.id}`}>
                  <Image src={w.img} alt={w.name} />
                </Link>
              </li>
            ))}
          </ul>
        </WishlistStyles>
      </Container>
    </Layout>
  );
}

export default Wishlist;
