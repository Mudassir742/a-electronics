import React from "react";
import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import CategoryCard from "./layout/CategoryCard";
import CardImage from "./cardImage.jpg";

const RootStyle = styled("div")(({ theme, stickey }) => ({
  padding: "2rem",
  width:'100vw',
  maxWidth:'100%',
  overflow:'hidden'
}));
const CategoryTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  color: "#050704",
}));
const CategoryDetail = styled(Grid)(({ theme }) => ({
  margin: "4rem 0",
}));

const Categories = () => {
  return (
    <RootStyle>
      <CategoryTitle variant="h3">Exclusive Categories</CategoryTitle>
      <CategoryDetail container spacing={2}>
        <CategoryCard image={CardImage} />
        <CategoryCard image={CardImage} />
        <CategoryCard image={CardImage} />
      </CategoryDetail>
    </RootStyle>
  );
};

export default Categories;
