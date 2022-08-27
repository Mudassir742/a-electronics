//react
import { useEffect } from "react";

//material
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

//components
import ProductCard from "./ProductCard";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "src/store/thunk/productThunk";

//----------------------------------------------------------------------

const ProductContainer = styled(Box)(({ theme }) => ({
  margin: "0 2rem 4rem 3rem",
}));

const ProductGrid = styled(Grid)(({ theme }) => ({}));

//-----------------------------------------------------------------------

const ProductList = () => {
  const matches = useMediaQuery("(max-width:600px)");

  const { products=[], loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  console.log(products);

  return (
    <ProductContainer>
      <Typography variant="h4" marginBottom="2rem" color="#050704">
        All Categories
      </Typography>
      <ProductGrid container spacing={matches ? 4 : 2}>
        {!loading &&
          products.map((product) => (
            <Grid item key={product._id} lg={3} md={4} sm={6} xs={12}>
              <ProductCard
                name={product.name}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))}
      </ProductGrid>
    </ProductContainer>
  );
};

export default ProductList;
