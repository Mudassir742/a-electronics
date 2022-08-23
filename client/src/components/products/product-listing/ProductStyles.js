import { styled } from "@mui/material/styles";
import { Button, Box, Card, Typography } from "@mui/material";

export const CardContainer = styled(Card)(({ theme }) => ({
  borderRadius: "5px",
  padding: "1rem 0",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0px 2px 8px 0px rgba(46,46,46,0.4)",
    transition: ".3s ease-out",
  },
}));
export const ImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "70%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
}));
export const Image = styled("img")(({ theme }) => ({
  height: "auto",
  width: "100%",
  maxWidth: "200px",
}));

export const ProductInfoContainer = styled(Box)(({ theme }) => ({
  padding: "1rem 1.5rem",
}));

export const ProductInfo = styled(Typography)(({ theme }) => ({
  color: "#050704",
}));
export const ProductPriceContainer = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
export const ProductRating = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  gap: ".4rem",
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  marginTop: "1.5rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const CardButton = styled(Button)(({ theme }) => ({
  display: "flex",
  height: "40px",
  width: "100%",
  alignItems: "center",
  background: "#050704",
  color: "white",
  borderRadius: "5px",
  "&:hover": {
    background: "#2C3038",
  },
}));
