import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Drawer } from "@mui/material";

const RootStyle = styled("div")(({ theme }) => ({}));

const CustomerDrawer = ({ isOpenSidebar, onCloseSidebar, children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <RootStyle>
      <Drawer
        open={isOpenSidebar}
        onClose={onCloseSidebar}
        PaperProps={{
          sx: { width: "280px", background: "#EFEEEA" },
        }}
      >
        {children}
      </Drawer>
    </RootStyle>
  );
};

export default CustomerDrawer;
