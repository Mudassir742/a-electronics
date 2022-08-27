import { useState, useEffect } from "react";
//material
import {
  Pagination,
  useMediaQuery,
  Box,
  Grid,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
//components
import SearchSection from "src/components/products/search";
import ProductFilter from "src/components/products/product-filter/ProductFilter";
import ProductCard from "src/components/products/product-listing/ProductCard";
import CustomerDrawer from "src/components/drawer/CustomerDrawer";
import Filter from "src/components/products/filter";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "src/store/thunk/productThunk";

//-------------------------------------------------------------
const RootStyle = styled(Box)(({ theme }) => ({}));
const Divider = styled(Box)(({ theme }) => ({
  borderTop: "1px solid #C3C8D4",
  margin: "6rem 3rem 4rem 3rem",
}));
const ProductContainer = styled(Box)(({ theme }) => ({
  margin: "0 2rem 4rem 3rem",
}));

const PaginationWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "4rem 0",
}));

//-------------------------------------------------------------

const Home = () => {
  const [open, setOpen] = useState(false);
  const paginationMatch = useMediaQuery("(max-width:500px)");
  const spacingMatch = useMediaQuery("(max-width:600px)");

  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <CustomerDrawer
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
      >
        <Filter onCloseSidebar={() => setOpen(false)} />
      </CustomerDrawer>
      <RootStyle>
        <SearchSection />
        <Divider />
        <ProductFilter handleFilterSidebar={() => setOpen(!open)} />
        <ProductContainer>
          <Typography variant="h4" marginBottom="2rem" color="#050704">
            All Categories
          </Typography>
          <Grid container spacing={spacingMatch ? 4 : 2}>
            {products &&
              products.map((product) => (
                <Grid item key={product._id} lg={3} md={4} sm={6} xs={12}>
                  <ProductCard
                    name={product.name}
                    image={product.image[0].imageURL}
                    price={product.price}
                  />
                </Grid>
              ))}
          </Grid>
        </ProductContainer>
        <PaginationWrapper>
          <Pagination
            count={10}
            color="custom"
            size={paginationMatch ? "small" : "large"}
          />
        </PaginationWrapper>
      </RootStyle>
    </>
  );
};

export default Home;
