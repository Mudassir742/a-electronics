import React from "react";
// material
import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";

const RootStyle = styled("div")(({ theme }) => ({}));

const CustomerDrawer = ({ isOpenSidebar, onCloseSidebar, children }) => {
  return (
    <RootStyle>
      <Drawer
        open={isOpenSidebar}
        onClose={onCloseSidebar}
        PaperProps={{
          sx: { width: "280px" },
        }}
      >
        {children}
      </Drawer>
    </RootStyle>
  );
};

export default CustomerDrawer;
