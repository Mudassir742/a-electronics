import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

//components
import CustomerDrawer from "src/components/drawer/CustomerDrawer";
import Icon from "src/components/Iconify";
import CustomerProfile from "src/components/customer-profile/CustomerProfile";

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
  backgroundColor: "#EFEEEA",
  transition: "top,left,padding .6s",
  boxShadow: stickey && "0px 2px 8px 0px rgba(46,46,46,0.4)",
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
  [theme.breakpoints.down(769)]: {
    display: "none",
  },
}));

const CustomerNavbar = () => {
  const [style, setStyle] = useState(false);
  const [open, setOpen] = useState(false);
  const isTablet = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) setStyle(true);
      else setStyle(false);
    });
  }, []);

  return (
    <>
      {isTablet && (
        <CustomerDrawer
          isOpenSidebar={open}
          onCloseSidebar={() => setOpen(false)}
        >
          <CustomerProfile />
        </CustomerDrawer>
      )}
      <RootStyle stickey={style}>
        <Header>
          <h2 className="logo">Logo</h2>
          <NavItems>
            <NavLink to="/app/home" className="link">
              Home
            </NavLink>
            <NavLink to="/app/products-list" className="link">
              Products
            </NavLink>
            <NavLink to="/app/orders" className="link">
              Order
            </NavLink>
          </NavItems>
          {isTablet ? (
            <div>
              <Icon
                onClick={() => setOpen(true)}
                icon="heroicons-solid:menu"
                width={50}
                height={40}
              />
            </div>
          ) : (
            <h4>Account</h4>
          )}
        </Header>
      </RootStyle>
    </>
  );
};

export default CustomerNavbar;
