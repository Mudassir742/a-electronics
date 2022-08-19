import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import BannerImage from "./electronics.png";

const BannerContainer = styled("section")(({ theme }) => ({
  height: "auto",
  marginBottom: "2rem",
  padding: "9rem 2rem 0 2rem",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down(901)]: {
    paddingTop:'8rem'
  },
  [theme.breakpoints.down(601)]: {},
  [theme.breakpoints.down(401)]: {},
}));

const BannerContent = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  [theme.breakpoints.down(901)]: {
    flexDirection: "column-reverse",
    borderRadius: "8px",
    boxShadow: "0px 2px 8px 0px rgba(46,46,46,0.4)",
  },
}));
const InfoWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
}));
const ItemInfo = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(to bottom,#E58E34 82%,#fff 4% ,#F6D4B1 14%)",
  [theme.breakpoints.down(901)]: {
    padding: "1.5rem 0 1rem 1rem",
    background: "white",
    display: "block",
    borderTop: "20px solid #E58E34",
  },
}));
const ItemImage = styled(Grid)(({ theme }) => ({}));
const OfferHeading = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "2.5rem",
  fontWeight: "bold",
  [theme.breakpoints.down(901)]: {
    display: "none",
  },
}));
const OfferDetail = styled(Typography)(({ theme }) => ({
  margin: "1.2rem 0 3rem 0",
  color: "white",
  [theme.breakpoints.down(901)]: {
    margin: "0 0 1.5rem 0",
    color: "black",
  },
}));

const ShopButton = styled(Button)(({ theme }) => ({
  background: "white",
  width: "130px",
  padding: ".5rem 0",
  borderRadius: "8px",
  color: "#000",
  "&:hover": {
    background: "#ffa",
  },
  [theme.breakpoints.down(901)]: {
    background: "#2C3038",
    color: "white",
  },
}));

const Image = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  minWidth: "600px",
  [theme.breakpoints.down(901)]: {
    minWidth: "100%",
  },
}));

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent container>
        <ItemInfo item lg={4} md={6} sm={12}>
          <InfoWrapper>
            <OfferHeading>Weekly Deals</OfferHeading>
            <OfferDetail>
              <strong>Save upto 70%</strong> on selected Products. plus get free
              shopping storewide
            </OfferDetail>
            <ShopButton>Shop</ShopButton>
          </InfoWrapper>
        </ItemInfo>
        <ItemImage item lg={8} md={6} sm={12}>
          <Image src={BannerImage} alt="banner" />
        </ItemImage>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
