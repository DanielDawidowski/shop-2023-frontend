import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import Homeslider from "../../../components/Slider/slider";
import Image from "../../../components/image/image";
import data from "../../../data.json";
import { RecommendStyles } from "./RecommendStyles";

let selected = data.sort(() => 0.5 - Math.random()).slice(0, 10);

function Recommended() {
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
    <RecommendStyles>
      <motion.h1>Recommended for you</motion.h1>
      <Homeslider show={3}>
        {selected.map((item) => {
          return (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              onClick={() => addToReviews(item)}
            >
              <motion.li className="recommend__list--item">
                <Image src={item.img} alt={item.name} />
                <div className="recommend__item">
                  <motion.h3>{item.name}</motion.h3>
                  <span>
                    <b>$ {item.price}</b>
                  </span>
                </div>
              </motion.li>
            </Link>
          );
        })}
      </Homeslider>
    </RecommendStyles>
  );
}

export default Recommended;
