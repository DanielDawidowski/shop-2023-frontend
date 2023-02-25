import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import _ from "lodash";
import Image from "../../components/image/image";
import { ProductCardStyles } from "./productCardStyles";
import { Icon } from "../../components/globalStyles/icon";

const ProductCard = ({ product }) => {
  const [wishlist, setWishlist] = useState(true);
  const [open, setOpen] = useState(false);

  const { wish } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();

  const { id, img, name, price, size, mark, color } = product;

  const handleAddToWishlist = (id) => {
    let wish = [];
    setWishlist(!wishlist);

    if (typeof window !== "undefined") {
      if (localStorage.getItem("wish")) {
        wish = JSON.parse(localStorage.getItem("wish"));
      }
    }

    if (wishlist === true) {
      wish.push({
        ...product,
      });
    } else {
      wish = wish.filter((el) => el.id !== id);
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

  const addToReviews = (product) => {
    let review = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("review")) {
        review = JSON.parse(localStorage.getItem("review"));
      }
      review.unshift({
        ...product,
      });

      // remove duplicates
      let unique = _.uniqWith(review, _.isEqual);

      localStorage.setItem("review", JSON.stringify(unique));

      dispatch({
        type: "LATEST_REVIEW",
        payload: unique,
      });
    }
  };

  return (
    <ProductCardStyles>
      <motion.div className="product__card">
        <motion.div
          className="product__card--image"
          // onMouseEnter={() => setOpen(true)}
          // onMouseLeave={() => setOpen(false)}
          onHoverStart={() => setOpen(true)}
          onHoverEnd={() => setOpen(false)}
          onClick={() => setOpen(true)}
        >
          <Image src={img} alt={name} />
          <div
            className="product__card--wishlist"
            onClick={() => handleAddToWishlist(id)}
          >
            {wishId.includes(id) ? (
              <Icon viewBox="0 0 512 450" noborder="true">
                <path
                  d="m449.28 121.43a115.2 115.2 0 0 0 -137.89-35.75c-21.18 9.14-40.07 24.55-55.39 45-15.32-20.5-34.21-35.91-55.39-45a115.2 115.2 0 0 0 -137.89 35.75c-16.5 21.62-25.22 48.64-25.22 78.13 0 42.44 25.31 89 75.22 138.44 40.67 40.27 88.73 73.25 113.75 89.32a54.78 54.78 0 0 0 59.06 0c25-16.07 73.08-49.05 113.75-89.32 49.91-49.42 75.22-96 75.22-138.44 0-29.49-8.72-56.51-25.22-78.13z"
                  fill="#f9595f"
                />
              </Icon>
            ) : (
              <Icon black="true" viewBox="-3 -4 22 22" noborder="true">
                <path d="M14.37 2.56a3.92 3.92 0 0 0-3-1 4.1 4.1 0 0 0-1.82.52A9.18 9.18 0 0 0 8 3.06a9.35 9.35 0 0 0-1.49-1 3.85 3.85 0 0 0-1.77-.52A4.07 4.07 0 0 0 1.63 2.6 4 4 0 0 0 .35 5.52a3.83 3.83 0 0 0 .88 2.33 33.87 33.87 0 0 0 5.7 6.2l.39-.49-.38.49a1.67 1.67 0 0 0 1.06.42 1.71 1.71 0 0 0 1.08-.42 37.42 37.42 0 0 0 6.06-6.73 3.5 3.5 0 0 0 .47-1.74 4 4 0 0 0-1.24-3.02zm-.26 4.06a37.1 37.1 0 0 1-5.81 6.46.56.56 0 0 1-.28.13.51.51 0 0 1-.29-.14 32.77 32.77 0 0 1-5.49-5.94 2.74 2.74 0 0 1-.64-1.61 2.75 2.75 0 0 1 .88-2 2.79 2.79 0 0 1 2.16-.72h.1a2.73 2.73 0 0 1 1.19.38A10.23 10.23 0 0 1 7.24 4l.76.63.76-.63a9 9 0 0 1 1.34-.86 2.91 2.91 0 0 1 1.26-.39h.1a2.68 2.68 0 0 1 2.07.68 2.78 2.78 0 0 1 .87 2 2.18 2.18 0 0 1-.29 1.19z" />
              </Icon>
            )}
          </div>
          {open && (
            <motion.div
              className="product__card--details"
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <h3>size: {size} </h3>
              <h3>color: {color} </h3>
            </motion.div>
          )}
        </motion.div>
        <div className="product__card--content">
          <Link
            to={`/product/${id}`}
            key={id}
            onClick={() => addToReviews(product)}
          >
            <h4> {mark} </h4>
            <h2>
              <b>{name}</b>
            </h2>
            <h3>$ {price}</h3>
          </Link>
        </div>
      </motion.div>
    </ProductCardStyles>
  );
};

export default ProductCard;
