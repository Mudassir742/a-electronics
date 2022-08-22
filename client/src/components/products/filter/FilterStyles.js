import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Stack,
} from "@mui/material";

export const RootStyle = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1rem",
  position: "relative",
  width: "100%",
}));
export const FilterHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "160px",
  padding: "2rem 1rem",
  marginBottom: "1rem",
  position: "fixed",
  top: 0,
  left: 0,
  height: "80px",
  width: "280px",
  background: "#EFEEEA",
  zIndex: "1000",
}));

export const FilterWrapper = styled(Box)(({ theme }) => ({
  margin: "2rem 0",
}));

export const FilterSection = styled(Box)(({ theme }) => ({
  margin: "70px 0",
}));

export const ButtonWrapper = styled(Box)(({ theme }) => ({
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
  zIndex: "1000",
}));

export const FilterButton = styled(Button)(({ theme }) => ({
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

export const ChipWrapper = styled(Box)(({ theme }) => ({}));

export const Chip = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: ".6rem",
  border: "1px solid #050704",
  width: "min-content",
  borderRadius: "50px",
  padding: ".1rem 0 .1rem .4rem",
}));
