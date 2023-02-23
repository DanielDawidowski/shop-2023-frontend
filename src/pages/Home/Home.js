import React from "react";
import Layout from "../../components/layout/layout";
import { Container } from "../../components/layout/layoutStyles";
import Carousel from "./HeroCarousel/Carousel";
import Slider from "./HomeSlider/slider";
import { HomeStyles } from "./homeStyles";

function Home() {
  return (
    <Layout>
      <HomeStyles>
        <div className="home__hero">
          <Container>
            <Carousel />
          </Container>
        </div>
        <Container>
          <Slider />
        </Container>
      </HomeStyles>
    </Layout>
  );
}

export default Home;
