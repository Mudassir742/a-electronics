import React from "react";

//material
import { styled } from "@mui/material/styles";

import SearchComponent from "./SearchComponent";

const RootStyle = styled("div")(({ theme }) => ({
  padding: "8rem 2rem 2rem 2rem",
  backgroundColor: "#EFEEEA",
  height: "300px",
  marginBottom: "3rem",
}));

const SearchSection = () => {
  return (
    <RootStyle>
      <SearchComponent />
    </RootStyle>
  );
};

export default SearchSection;
