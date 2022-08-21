import { styled } from "@mui/material/styles";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

import ProductCard from "./ProductCard";

const ProductContainer = styled(Box)(({ theme }) => ({
  margin: "0 2rem 4rem 3rem",
}));

const ProductGrid = styled(Grid)(({ theme }) => ({}));

const ProductList = () => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <ProductContainer>
      <Typography variant="h4" marginBottom="2rem" color="#050704">
        All Categories
      </Typography>
      <ProductGrid container spacing={matches ? 4 : 2}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ProductCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ProductCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ProductCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ProductCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ProductCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ProductCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ProductCard />
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <ProductCard />
        </Grid>
      </ProductGrid>
    </ProductContainer>
  );
};

export default ProductList;
