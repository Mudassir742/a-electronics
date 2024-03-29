import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material";

export const RootStyle = styled("div")(({ theme }) => ({
  padding: "8rem 3rem 4rem 3rem",
  backgroundColor: "#EFEEEA",
  height: "auto",
  maxHeight: "500px",
  marginBottom: "3rem",
  position: "relative",
  [theme.breakpoints.down(501)]: {
    paddingBottom: "3rem",
  },
}));
export const Container = styled("div")(({ theme }) => ({}));
export const SearchContainer = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down(780)]: {
    width: "90%",
    height: "65px",
  },
  [theme.breakpoints.down(640)]: {
    width: "100%",
  },
  [theme.breakpoints.down(501)]: {
    width: "100%",
    position: "static",
    transform: "none",
    padding: "0",
    marginTop: "2rem",
    height: "auto",
    display: "block",
  },
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  boxShadow: "0px 2px 8px 0px rgba(46,46,46,0.4)",
  [theme.breakpoints.down(501)]: {
    marginBottom: "2rem",
  },
}));

export const InputContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "90%",
  background: "white",
  borderRadius: "5px 0 0 5px",
  [theme.breakpoints.down(501)]: {
    height: "60px",
  },
}));

export const InputField = styled("input")(({ theme }) => ({
  height: "100%",
  width: "100%",
  border: "transparent",
  outline: "transparent",
  background: "white",
  borderRadius: "5px 0 0 5px",
  padding: "0 1rem",
  fontSize: "1.1rem",
}));

export const SearchButton = styled(Button)(({ theme }) => ({
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
  [theme.breakpoints.down(501)]: {
    height: "60px",
  },
}));

export const SelectCategory = styled(Box)(({ theme }) => ({
  background: "#050704",
  height: "100%",
  width: "150px",
  Overflow: "hidden",
  borderRadius: "5px",
  [theme.breakpoints.down(501)]: {
    display: "none",
  },
}));

export const CategoryButton = styled(Button)(({ theme }) => ({
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
