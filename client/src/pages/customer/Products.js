import { useState } from "react";
//material
import { Pagination, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
//components
import SearchSection from "src/components/products/search";
import ProductFilter from "src/components/products/product-filter/ProductFilter";
import ProductList from "src/components/products/product-listing";
import CustomerDrawer from "src/components/drawer/CustomerDrawer";
import Filter from "src/components/products/filter";
import { Box } from "@mui/material";

const RootStyle = styled("section")(({ theme }) => ({}));
const Divider = styled("div")(({ theme }) => ({
  borderTop: "1px solid #C3C8D4",
  margin: "6rem 3rem 4rem 3rem",
}));
const PaginationWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "4rem 0",
}));

const Home = () => {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(max-width:500px)");
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
        <PaginationWrapper>
          <Pagination
            count={10}
            color="custom"
            size={matches ? "small" : "large"}
          />
        </PaginationWrapper>
      </RootStyle>
    </>
  );
};

export default Home;
