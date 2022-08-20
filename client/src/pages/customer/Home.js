import React from "react";

import { styled } from "@mui/material/styles";

//components
import Banner from "src/components/banner/Banner";
import Categories from "src/components/categories/Categories";
import SecondaryBanner from "src/components/banner/SecondaryBanner";

const RootStyle = styled("section")(({ theme, stickey }) => ({}));

const Home = () => {
  return (
    <RootStyle>
      <Banner />
      <Categories />
      <SecondaryBanner />
    </RootStyle>
  );
};

export default Home;
