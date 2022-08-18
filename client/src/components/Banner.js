import React from "react";
import { styled } from "@mui/material/styles";

const BannerContainer = styled("section")(({ theme }) => ({
  padding: "0 3rem",
}));

const BannerStyle = styled("section")(({ theme }) => ({
  border: "1px solid black",
  height: "50vh",
}));

const Banner = () => {
  return (
    <BannerContainer>
      <BannerStyle>Banner</BannerStyle>
    </BannerContainer>
  );
};

export default Banner;
