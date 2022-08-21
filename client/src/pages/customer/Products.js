import { styled } from "@mui/material/styles";
//components
import SearchSection from "src/components/products/search";
import ProductFilter from "src/components/products/product-filter/ProductFilter";
import ProductList from "src/components/products/product-listing";

const RootStyle = styled("section")(({ theme }) => ({}));
const Divider = styled("div")(({ theme }) => ({
  borderTop: "1px solid #C3C8D4",
  margin: "6rem 3rem 4rem 3rem",
}));

const Home = () => {
  return (
    <RootStyle>
      <SearchSection />
      <Divider />
      <ProductFilter />
      <ProductList />
    </RootStyle>
  );
};

export default Home;
