import React from "react";
//material
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Divider,
  RadioGroup,
  Radio,
  Button,
} from "@mui/material";

//components
import Icon from "src/components/Iconify";
import CustomFormControlLabel from "src/components/CustomRadioButton";

const RootStyle = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1rem",
  position: "relative",
  width: "100%",
}));
const FilterHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "180px",
  padding: "2rem 1rem",
  marginBottom: "1rem",
  position: "fixed",
  top: 0,
  left: 0,
  height: "80px",
  width:'280px',
  background: "#EFEEEA",
}));

const FilterWrapper = styled(Box)(({ theme }) => ({
  margin: "2rem 0",
}));

const FilterSection = styled(Box)(({ theme }) => ({
  margin: "70px 0",
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  height: "80px",
  width: "280px",
  padding: "2rem 1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  background: "#EFEEEA",
  position: "fixed",
  bottom: 0,
  left: 0,
}));

const FilterButton = styled(Button)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "50px",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.custom.main,
  color: "white",
  borderRadius: "5px",
  "&:hover": {
    background: "#2C3038",
  },
}));

const Chip = styled(Box)(({ theme }) => ({}));

const Filter = () => {
  return (
    <RootStyle>
      <FilterHeader>
        <Typography variant="h5" color="#050704">
          Filter
        </Typography>
        <Icon
          icon="fluent-emoji-high-contrast:cross-mark"
          width={22}
          height={22}
          color="#050704"
        />
      </FilterHeader>
      <FilterSection>
        <Divider sx={{ margin: ".75rem 0" }} />
        <FilterWrapper>
          <Typography variant="h6" color="#050704">
            Price
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{ margin: ".8rem 0" }}
          >
            <CustomFormControlLabel
              value="100"
              label="100$ - 1000$"
              control={<Radio color="custom" />}
            />
            <CustomFormControlLabel
              value="1000"
              label="1000$ - 3000$"
              control={<Radio color="custom" />}
            />
            <CustomFormControlLabel
              value="3000"
              label="3000$ - 5000$"
              control={<Radio color="custom" />}
            />
            <CustomFormControlLabel
              value="5000"
              label="5000$ - 10000$"
              control={<Radio color="custom" />}
            />
          </RadioGroup>
        </FilterWrapper>
        <Divider sx={{ margin: ".75rem 0" }} />
        <FilterWrapper>
          <Typography variant="h6" color="#050704">
            Category
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{ margin: ".8rem 0" }}
          >
            <CustomFormControlLabel
              value="television"
              label="TV/LEDs"
              control={<Radio color="custom" />}
            />
            <CustomFormControlLabel
              value="laptop"
              label="Laptop"
              control={<Radio color="custom" />}
            />
            <CustomFormControlLabel
              value="electricity"
              label="Electricity"
              control={<Radio color="custom" />}
            />
          </RadioGroup>
        </FilterWrapper>
      </FilterSection>
      <ButtonWrapper>
        <FilterButton>Apply Filter</FilterButton>
      </ButtonWrapper>
    </RootStyle>
  );
};

export default Filter;
