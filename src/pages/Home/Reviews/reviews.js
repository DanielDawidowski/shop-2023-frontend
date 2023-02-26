import React from "react";
import { motion } from "framer-motion";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ReviewsStyles } from "./reviewsStyles";
import Image from "../../../components/image/image";

function Reviews() {
  const { review } = useSelector((state) => ({ ...state }));
  let dispatch = useDispatch();

  const addToReviews = (product) => {
    let review = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("review")) {
        review = JSON.parse(localStorage.getItem("review"));
      }
      review.unshift({
        ...product,
      });

      let unique = _.uniqWith(review, _.isEqual);

      localStorage.setItem("wish", JSON.stringify(unique));

      dispatch({
        type: "LATEST_REVIEW",
        payload: unique,
      });
    }
  };

  return (
    <ReviewsStyles>
      {review.length > 0 && (
        <>
          <motion.h1>Latest Review</motion.h1>
          <motion.ul className="review__list">
            {review.slice(0, 3).map((item) => {
              return (
                <Link
                  to={`/product/${item.id}`}
                  key={item.id}
                  onClick={() => addToReviews(item)}
                >
                  <motion.li className="review__list--item">
                    <Image src={item.img} alt={item.name} />
                    <div className="review__item">
                      <motion.h3>{item.name}</motion.h3>
                      <span>
                        <b>$ {item.price}</b>
                      </span>
                    </div>
                  </motion.li>
                </Link>
              );
            })}
          </motion.ul>
        </>
      )}
    </ReviewsStyles>
  );
}

export default Reviews;
