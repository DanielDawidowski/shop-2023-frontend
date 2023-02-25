import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";
import Layout from "../../components/layout/layout";
import { Container } from "../../components/layout/layoutStyles";
import Carousel from "./HeroCarousel/Carousel";
import Scroll from "./HomeScroll/scroll";
import Reviews from "./HomeReviews/reviews";
import { HomeStyles } from "./homeStyles";
import Homeslider from "./HomeSlider/HomeSlider";
import Image from "../../components/image/image";
import data from "../../data.json";

let selected = data.sort(() => 0.5 - Math.random()).slice(0, 10);

function Home() {
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
    <Layout>
      <HomeStyles>
        <div className="home__hero">
          <Container>
            <Carousel />
          </Container>
        </div>
        <div className="home__scroll--text media">
          <Scroll media />
        </div>
        <div className="home__scroll--text">
          <Scroll />
        </div>
        <Container>
          <Reviews />
          <Homeslider show={2}>
            {selected.map((item) => {
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
          </Homeslider>
        </Container>
      </HomeStyles>
    </Layout>
  );
}

export default Home;
