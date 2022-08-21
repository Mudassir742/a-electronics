import { useState } from "react";
//material
import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import Icon from "src/components/Iconify";
import ActionMenu from "src/components/ActionMenu";

const RootStyle = styled("div")(({ theme }) => ({
  padding: "8rem 3rem 4rem 3rem",
  backgroundColor: "#EFEEEA",
  height: "auto",
  maxHeight: "500px",
  marginBottom: "3rem",
  position: "relative",
}));
const Container = styled("div")(({ theme }) => ({}));
const SearchContainer = styled("box")(({ theme }) => ({
  position: "absolute",
  height: "70px",
  width: "80%",
  maxWidth: "1330px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "30px",
  right: "50%",
  transform: "translateX(50%)",
  bottom: "-30px",
  padding: "0 4rem",
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  boxShadow: "0px 2px 8px 0px rgba(46,46,46,0.4)",
}));

const InputContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "90%",
  background: "white",
  borderRadius: "5px 0 0 5px",
}));

const InputField = styled("input")(({ theme }) => ({
  height: "100%",
  width: "100%",
  border: "transparent",
  outline: "transparent",
  background: "white",
  borderRadius: "5px 0 0 5px",
  padding: "0 1rem",
  fontSize: "1.1rem",
}));

const SearchButton = styled(Button)(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "10%",
  alignItems: "center",
  justifyContent: "center",
  background: "#050704",
  borderRadius: "0 5px 5px 0",
  "&:hover": {
    background: "#2C3038",
  },
}));

const SelectCategory = styled(Box)(({ theme }) => ({
  background: "#050704",
  height: "100%",
  width: "150px",
  Overflow: "hidden",
  borderRadius: "5px",
}));

const CategoryButton = styled(Button)(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  background: "#050704",
  color: "white",
  borderRadius: "5px",
  "&:hover": {
    background: "#2C3038",
  },
}));

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
