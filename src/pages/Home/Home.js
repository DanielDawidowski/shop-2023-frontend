import React from "react";
import Layout from "../../components/layout/layout";
import Carousel from "./Hero/Carousel";
import { HomeStyles } from "./homeStyles";

function Home() {
  return (
    <Layout>
      <HomeStyles>
        <Carousel />
      </HomeStyles>
    </Layout>
  );
}

export default Home;
