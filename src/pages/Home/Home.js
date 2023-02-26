import React from "react";
import Layout from "../../components/layout/layout";
import { Container } from "../../components/layout/layoutStyles";
import Carousel from "./Carousel/Carousel";
import Scroll from "./Scroll/scroll";
import Reviews from "./Reviews/reviews";
import { HomeStyles } from "./homeStyles";
import Recommended from "./Recommend/Recommend";

function Home() {
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
          <Recommended />
          <Reviews />
        </Container>
      </HomeStyles>
    </Layout>
  );
}

export default Home;
