import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material";

import Icon from "src/components/Iconify";

const FilterContainer = styled(Box)(({ theme }) => ({
  margin: "0 2rem 2rem 3rem",
}));

export const FilterButton = styled(Button)(({ theme }) => ({
  display: "flex",
  height: "50px",
  width: "200px",
  alignItems: "center",
  justifyContent: "center",
  background: "#050704",
  color: "white",
  borderRadius: "5px",
  "&:hover": {
    background: "#2C3038",
  },
}));

const ProductFilter = () => {
  return (
    <FilterContainer>
      <FilterButton
        startIcon={<Icon icon="akar-icons:filter" width={22} height={24} />}
      >
        Filter
      </FilterButton>
    </FilterContainer>
  );
};

export default ProductFilter;
