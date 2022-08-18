//react
import React from "react";
import { Outlet } from "react-router-dom";
//material
import { styled } from "@mui/material/styles";

const CustomerLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default CustomerLayout;
