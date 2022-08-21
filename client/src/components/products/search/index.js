import React from "react";

//material
import { Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import Icon from "src/components/Iconify";

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
  gap: "20px",
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
}));

const SearchSection = () => {
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
            <Icon icon="bi:search" width={30} height={30} color="white" />
          </SearchButton>
        </FormContainer>

        <Box>Categories</Box>
      </SearchContainer>
    </RootStyle>
  );
};

export default SearchSection;
