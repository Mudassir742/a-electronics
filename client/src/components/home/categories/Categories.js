import React from "react";
import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import CategoryCard from "./layout/CategoryCard";
import CardImage from "src/assets/cardImage.jpg";
import deliveryImage from "src/assets/delivery.jpg";
import solarImage from "src/assets/solarPannel.jpg";
import productImage from "src/assets/allProducts.jpg";
import phoneImage from "src/assets/phones.jpg";
import laptopImage from "src/assets/cardLaptop2.jpg";

const RootStyle = styled("div")(({ theme, stickey }) => ({
  padding: "2rem",
  width: "100vw",
  maxWidth: "100%",
  overflow: "hidden",
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
        <CategoryCard
          image={CardImage}
          heading="Weekly Deals"
          info="Get great new deals each week."
        />
        <CategoryCard
          image={deliveryImage}
          heading="Ready-to-Ship"
          info="need it soon?get it fast"
        />
        <CategoryCard
          image={solarImage}
          heading="Ruseable Energy"
          info="Generate solar electricuty."
        />
        <CategoryCard
          image={phoneImage}
          heading="Latest Phones"
          info="Buy latest phones now."
        />
        <CategoryCard
          image={laptopImage}
          heading="2-in-1 Laptops"
          info="Laptops according to need."
        />
        <CategoryCard
          image={productImage}
          heading="All Products"
          info="View all products now."
        />
      </CategoryDetail>
    </RootStyle>
  );
};

export default Categories;
