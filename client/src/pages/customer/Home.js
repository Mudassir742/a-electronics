import React from "react";

import { styled } from "@mui/material/styles";

import Banner from "src/components/Banner";

const RootStyle = styled("section")(({ theme, stickey }) => ({
  
}));

const Home = () => {
  return (
    <RootStyle>
      <Banner />
    </RootStyle>
  );
};

export default Home;
