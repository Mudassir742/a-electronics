import React from "react";
// material
import { styled } from "@mui/material/styles";
import { Box, Drawer, Typography } from "@mui/material";

const RootStyle = styled("div")(({ theme }) => ({}));

const CustomerDrawer = ({ isOpenSidebar, onCloseSidebar }) => {
  return (
    <RootStyle>
      <Drawer
        open={isOpenSidebar}
        onClose={onCloseSidebar}
        PaperProps={{
          sx: { width: "280px" },
        }}
      >
        renderContent
      </Drawer>
    </RootStyle>
  );
};

export default CustomerDrawer;
