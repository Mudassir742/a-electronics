import React from "react";

import { styled } from "@mui/material/styles";

//components
import Banner from "src/components/home/banner/Banner";
import Categories from "src/components/home/categories/Categories";
import SecondaryBanner from "src/components/home/banner/SecondaryBanner";
import Footer from "src/components/home/footer/Footer";

const RootStyle = styled("section")(({ theme, stickey }) => ({}));

const Home = () => {
  return (
    <RootStyle>
      <Banner />
      <Categories />
      <SecondaryBanner />
      <Footer />
    </RootStyle>
  );
};

export default Home;
