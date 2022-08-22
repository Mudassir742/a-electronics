import React from "react";
//material
import { styled } from "@mui/material/styles";
import { Box, Typography, Divider, RadioGroup, Radio } from "@mui/material";

//components
import Icon from "src/components/Iconify";
import CustomFormControlLabel from "src/components/CustomRadioButton";

const RootStyle = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1rem",
}));
const FilterHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "1rem",
}));

const FilterWrapper = styled(Box)(({ theme }) => ({
  margin: "2rem 0",
}));

const InputWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
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
    </RootStyle>
  );
};

export default Filter;
