import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const RootStyle = styled("header")(({ theme }) => ({
  width: "100vw",
  maxWidth: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem 3rem"
}));

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1200px",
}));

const NavItems = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
  width: "30%",
}));

const CustomerNavbar = () => {
  return (
    <RootStyle>
      <Header>
        <h2>Logo</h2>
        <NavItems>
          <NavLink to="/app/home" className="link">
            Home
          </NavLink>
          <NavLink to="/app/products" className="link">
            Products
          </NavLink>
          <NavLink to="/app/orders" className="link">
            Order
          </NavLink>
        </NavItems>
        <div>Account</div>
      </Header>
    </RootStyle>
  );
};

export default CustomerNavbar;
