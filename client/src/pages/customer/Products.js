import { useState } from "react";
import { styled } from "@mui/material/styles";
//components
import SearchSection from "src/components/products/search";
import ProductFilter from "src/components/products/product-filter/ProductFilter";
import ProductList from "src/components/products/product-listing";
import CustomerDrawer from "src/components/drawer/CustomerDrawer";
import Filter from "src/components/products/filter";

const RootStyle = styled("section")(({ theme }) => ({}));
const Divider = styled("div")(({ theme }) => ({
  borderTop: "1px solid #C3C8D4",
  margin: "6rem 3rem 4rem 3rem",
}));

const Home = () => {
  const [open, setOpen] = useState(false);

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
        <ProductList />
      </RootStyle>
    </>
  );
};

export default Home;
