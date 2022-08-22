import React from "react";
//material
import {
  Typography,
  Divider,
  RadioGroup,
  Radio,
  IconButton,
} from "@mui/material";
import {
  RootStyle,
  FilterHeader,
  FilterSection,
  ChipWrapper,
  Chip,
  FilterWrapper,
  ButtonWrapper,
  FilterButton,
} from "./FilterStyles";

//components
import Icon from "src/components/Iconify";
import CustomFormControlLabel from "src/components/CustomRadioButton";

const Filter = ({ onCloseSidebar }) => {
  return (
    <RootStyle>
      <FilterHeader>
        <Typography variant="h5" color="#050704">
          Filter
        </Typography>
        <IconButton sx={{ color: "#050704" }} onClick={onCloseSidebar}>
          <Icon
            icon="fluent-emoji-high-contrast:cross-mark"
            width={22}
            height={22}
            color="#050704"
          />
        </IconButton>
      </FilterHeader>
      <FilterSection>
        <ChipWrapper>
          <Chip>
            <Typography variant="subtitle">price</Typography>
            <IconButton sx={{ color: "#050704", background: "#e7e7e2" }}>
              <Icon
                icon="fluent-emoji-high-contrast:cross-mark"
                width={12}
                height={12}
                color="#050704"
              />
            </IconButton>
          </Chip>
        </ChipWrapper>
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
        <Divider sx={{ margin: ".75rem 0" }} />

        <FilterWrapper>
          <Typography variant="h6" color="#050704">
            Company
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{ margin: ".8rem 0" }}
          >
            <CustomFormControlLabel
              value="hp"
              label="HP"
              control={<Radio color="custom" />}
            />
            <CustomFormControlLabel
              value="dell"
              label="Dell"
              control={<Radio color="custom" />}
            />
            <CustomFormControlLabel
              value="apple"
              label="Apple"
              control={<Radio color="custom" />}
            />
          </RadioGroup>
        </FilterWrapper>
        <Divider sx={{ margin: ".75rem 0" }} />
      </FilterSection>
      <ButtonWrapper>
        <FilterButton onClick={onCloseSidebar}>Apply Filter</FilterButton>
      </ButtonWrapper>
    </RootStyle>
  );
};

export default Filter;
