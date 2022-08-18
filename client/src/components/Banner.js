import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import BannerImage from "./Macbook.png";

const BannerContainer = styled("section")(({ theme }) => ({
  height: "75vh",
  backgroundColor: "#43D4E8",
  padding: "8rem 0 0 0",
  display: "flex",
  justifyContent: "center",
}));

const BannerStyle = styled("section")(({ theme }) => ({
  width: "100%",
  padding: "1rem",
  maxWidth: "1200px",
  overflow: "hidden",
}));
const OfferHeading = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "900",
  color: "white",
}));
const OfferDetail = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "white",
  margin: "1.5rem 0 2.8rem 0",
}));
const InfoWrapper = styled(Box)(({ theme }) => ({
  width: "75%",
}));
const ShopButton = styled(Button)(({ theme }) => ({
  background: "#FA5E1F",
  width: "150px",
  padding: ".6rem 0",
  color: "white",

  "&:hover": {
    background: "#e2531b",
  },
}));
const ImageBackground = styled(Box)(({ theme }) => ({
  border: "2px solid white",
  width: "420px",
  height: "420px",
  borderRadius: "210%",
  display: "flex",
  alignItems: "center",
  position: "relative",
}));

const Banner = () => {
  return (
    <BannerContainer>
      <BannerStyle>
        <Grid container spacing={2}>
          <Grid item md={6} alignItems="center" justifyContent="center">
            <InfoWrapper>
              <OfferHeading>Apple MacBook Air MQD32 Laptop</OfferHeading>
              <OfferDetail>
                It’s the ultrafast, ultracapable laptop that lets you work,
                play, or create just about anything — anywhere.
              </OfferDetail>
              <ShopButton>Shop Now</ShopButton>
            </InfoWrapper>
          </Grid>

          <Grid item md={6}>
            <ImageBackground>
              <div className="bubble bubble-white"></div>
              <div className="bubble"></div>
              <img src={BannerImage} className="image" />
            </ImageBackground>
          </Grid>
        </Grid>
      </BannerStyle>
    </BannerContainer>
  );
};

export default Banner;
