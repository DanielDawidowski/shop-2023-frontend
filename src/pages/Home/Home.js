import React from "react";
import Layout from "../../components/layout/layout";
import Search from "../../components/search/search";
import { HomeStyles } from "./homeStyles";

function Home() {
  return (
    <Layout>
      <HomeStyles>
        <Search />
      </HomeStyles>
    </Layout>
  );
}

export default Home;
