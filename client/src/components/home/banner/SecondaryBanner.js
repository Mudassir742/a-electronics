import { Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import BudsImage from "src/assets/GalaxyBuds.jpg";

const RootStyle = styled(Box)(({ theme, stickey }) => ({
  padding: "1rem 0 2rem 2rem",
  marginBottom: "2rem",
  width: "100vw",
  maxWidth: "100%",
  overflow: "hidden",
  position: "relative",
  [theme.breakpoints.down(901)]: {
    padding: "2rem",
  },
}));
const CardWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "60%",
  top: "50%",
  transform: "translateY(-50%)",
  padding: "1rem .5rem",
  background: "#F9FAFB",
  [theme.breakpoints.down(901)]: {
    position: "static",
    width: "auto",
    transform: "none",
    paddingLeft: 0,
  },
}));
const CardHeading = styled(Typography)(({ theme }) => ({
  color: "#050704",
  [theme.breakpoints.down(901)]: {
    marginBottom: "1rem",
  },
}));
const CardInfo = styled(Typography)(({ theme }) => ({
  margin: "1rem 0",
  color: "#050704",
  [theme.breakpoints.down(901)]: {
    maxWidth: "500px",
  },
  [theme.breakpoints.down(601)]: {
    display: "none",
  },
}));
export const ShopButton = styled(Button)(({ theme }) => ({
  background: "#050704",
  width: "130px",
  padding: ".5rem 0",
  borderRadius: "5px",
  color: "#fff",
  "&:hover": {
    background: "#0b0f09",
  },
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down(901)]: {
    display: "block",
  },
}));
const Image = styled("img")(({ theme }) => ({
  width: "85%",
  maxWidth: "1000px",
  maxHeight: "600px",
  [theme.breakpoints.down(901)]: {
    width: "100%",
    height: "100%",
  },
}));

const SecondaryBanner = () => {
  return (
    <RootStyle>
      <ImageWrapper>
        <Image src={BudsImage} />
      </ImageWrapper>
      <CardWrapper>
        <CardHeading variant="h3">Meet Galaxy Buds</CardHeading>
        <CardInfo>
          Every note sounds like the real thing because clear audio starts at
          the source with your favorite Samsung Galaxy device. The upgraded
          Samsung Seamless Codec encodes the full 24-bit audio.
        </CardInfo>
        <ShopButton>Shop</ShopButton>
      </CardWrapper>
    </RootStyle>
  );
};

export default SecondaryBanner;
