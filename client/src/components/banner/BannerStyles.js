import { Grid, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BannerContainer = styled("section")(({ theme }) => ({
  height: "auto",
  marginBottom: "2rem",
  padding: "9rem 2rem 0 2rem",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#EFEEEA",
  [theme.breakpoints.down(901)]: {
    paddingTop: "8rem",
  },
  [theme.breakpoints.down(601)]: {},
  [theme.breakpoints.down(401)]: {},
}));

export const BannerContent = styled(Grid)(({ theme }) => ({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  [theme.breakpoints.down(901)]: {
    flexDirection: "column-reverse",
    borderRadius: "8px",
    //boxShadow: "0px 2px 8px 0px rgba(46,46,46,0.4)",
  },
}));
export const InfoWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
}));
export const ItemInfo = styled(Grid)(({ theme }) => ({
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
export const ItemImage = styled(Grid)(({ theme }) => ({}));
export const OfferHeading = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "2.5rem",
  fontWeight: "bold",
  [theme.breakpoints.down(901)]: {
    display: "none",
  },
}));
export const OfferDetail = styled(Typography)(({ theme }) => ({
  margin: "1.2rem 0 3rem 0",
  color: "white",
  [theme.breakpoints.down(901)]: {
    margin: "0 0 1.5rem 0",
    color: "black",
  },
}));

export const ShopButton = styled(Button)(({ theme }) => ({
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

export const Image = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  minWidth: "600px",
  [theme.breakpoints.down(901)]: {
    minWidth: "100%",
  },
}));
