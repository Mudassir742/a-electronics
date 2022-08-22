import React from "react";
//material
import { styled } from "@mui/material/styles";
import { Box, Typography, Divider } from "@mui/material";

//components
import Icon from "src/components/Iconify";

const RootStyle = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1rem",
}));
const FilterHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Filter = () => {
  return (
    <RootStyle>
      <FilterHeader>
        <Typography variant="h5">Filter</Typography>
        <Icon
          icon="fluent-emoji-high-contrast:cross-mark"
          width={25}
          height={25}
        />
      </FilterHeader>
      <Divider sx={{ margin: ".75rem 0" }} />
    </RootStyle>
  );
};

export default Filter;
