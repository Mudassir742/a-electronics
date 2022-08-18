import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import BannerImage from "./Macbook.png";

const BannerContainer = styled("section")(({ theme }) => ({
  height: "75vh",
  backgroundColor: "#43D4E8",
  padding: "8rem 0 0 5rem",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down(780)]: {
    height: "auto",
  },
}));

const BannerStyle = styled("section")(({ theme }) => ({
  width: "100%",
  padding: "1rem",
  maxWidth: "1200px",
  overflow: "hidden",
  [theme.breakpoints.down(780)]: {
    marginBottom: "3rem",
  },
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
  [theme.breakpoints.down("980")]: {
    width: "100%",
  },
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
  borderRadius: "210px",
  marginRight:'5rem',
  display: "flex",
  alignItems: "center",
  position: "relative",
  [theme.breakpoints.down(890)]: {
    width:'350px',
    height:'350px',
    borderRadius:'175px',
  },
  [theme.breakpoints.down(760)]: {
    width:'300px',
    height:'300px',
    borderRadius:'150px',
  },
  [theme.breakpoints.down(600)]: {
    marginTop:'4rem',
    width:'350px',
    height:'350px',
    borderRadius:'175px',
  },
  [theme.breakpoints.down(470)]: {
    marginTop:'4rem',
    width:'300px',
    height:'300px',
    borderRadius:'150px',
  },
}));

const BubbleWhite = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  width: "220px",
  height: "220px",
  borderRadius: "110px",
  position: "absolute",
  right: "-40%",
  top: 0,
}));
const BubbleOrange = styled(Box)(({ theme }) => ({
  backgroundColor: "#FA5E1F",
  width: "180px",
  height: "180px",
  borderRadius: "90px",
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 1,
}));
const Image = styled("img")(({ theme }) => ({
  position: "absolute",
  width:'500px',
  zIndex: 1000
}));

const Banner = () => {
  return (
    <BannerContainer>
      <BannerStyle>
        <Grid container>
          <Grid item sm={6} xs={12} alignItems="center" justifyContent="center">
            <InfoWrapper>
              <OfferHeading>Apple MacBook Air MQD32 Laptop</OfferHeading>
              <OfferDetail>
                It’s the ultrafast, ultracapable laptop that lets you work,
                play, or create just about anything — anywhere.
              </OfferDetail>
              <ShopButton>Shop Now</ShopButton>
            </InfoWrapper>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ImageBackground>
              <BubbleOrange></BubbleOrange>
              <BubbleWhite></BubbleWhite>
              <Image src={BannerImage} />
            </ImageBackground>
          </Grid>
        </Grid>
      </BannerStyle>
    </BannerContainer>
  );
};

export default Banner;
