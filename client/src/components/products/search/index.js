import { useState } from "react";
//material
import { Typography } from "@mui/material";
import {
  RootStyle,
  Container,
  SearchContainer,
  FormContainer,
  InputContainer,
  InputField,
  SearchButton,
  SelectCategory,
  CategoryButton,
} from "./SearchStyles";

//components
import Icon from "src/components/Iconify";
import ActionMenu from "src/components/ActionMenu";

const SearchSection = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <RootStyle>
      <Container>
        <Typography variant="h3" color="#050704">
          Shop High Quality Electrnoic Products Now
        </Typography>
        <Typography marginY="1rem" color="#050704">
          Looking for electronic products? A-electronic covered you.
        </Typography>
      </Container>
      <SearchContainer>
        <FormContainer>
          <InputContainer>
            <InputField type="text" placeholder="Seach Product" />
          </InputContainer>
          <SearchButton>
            <Icon icon="bi:search" width={28} height={28} color="white" />
          </SearchButton>
        </FormContainer>

        <SelectCategory>
          <CategoryButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            startIcon={<Icon icon="fe:app-menu" width={22} height={24} />}
          >
            Category
          </CategoryButton>
          <ActionMenu
            anchorEl={anchorEl}
            open={open}
            handleClick={handleClick}
            handleClose={handleClose}
          />
        </SelectCategory>
      </SearchContainer>
    </RootStyle>
  );
};

export default SearchSection;
