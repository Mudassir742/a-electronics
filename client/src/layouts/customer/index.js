//react
import React from "react";
import { Outlet } from "react-router-dom";
//material
import { styled } from "@mui/material/styles";

import CustomerNavbar from "./CustomerNavbar";

const RootStyle = styled("div")(({ theme }) => ({
}));

const CustomerLayout = () => {
  return (
    <RootStyle className="customerLayout">
      <CustomerNavbar />
      <Outlet />
    </RootStyle>
  );
};

export default CustomerLayout;
