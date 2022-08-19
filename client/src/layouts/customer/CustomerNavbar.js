import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

const RootStyle = styled("header")(({ theme, stickey }) => ({
  width: "100vw",
  maxWidth: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  padding: stickey ? "1.4rem 5rem" : "2rem 6rem",
  backgroundColor: "#43D4E8",
  transition: "top,left,padding .6s",
  zIndex: 1000,
  [theme.breakpoints.down(901)]: {
    padding: stickey ? "1.1rem 2rem" : "1.4rem 3rem",
  },
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
  const [style, setStyle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setStyle(true);
      else setStyle(false);
    });
  }, []);

  return (
    <RootStyle stickey={style}>
      <Header>
        <h2 className="logo">Logo</h2>
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
