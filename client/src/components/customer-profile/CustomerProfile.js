//material
import { Box, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//components
import account from "src/_mock/account";
import navConfig from "src/layouts/customer/NavConfig";
import NavSection from "../NavSection";

//-------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  maxWidth: "280px",
  width: "100%",
}));

const CustomerInfo = styled(Box)(({ theme }) => ({
  background: theme.palette.custom.main,
  height: "200px",
  padding: "2rem",
}));

const AccountDetail = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
}));

const NavItems = styled(Box)(({ theme }) => ({
  padding: "2rem .5rem",
}));

//----------------------------------------------------

const CustomerProfile = () => {
  return (
    <RootStyle>
      <CustomerInfo>
        <Avatar
          src={account.photoURL}
          alt="photoURL"
          sx={{ width: 70, height: 70 }}
        />
        <AccountDetail>
          <Typography variant="h6" color="white">
            {account.displayName}
          </Typography>
          <Typography variant="subtitle" color="white">
            {account.email}
          </Typography>
        </AccountDetail>
      </CustomerInfo>
      <NavItems>
        <NavSection navConfig={navConfig} />
      </NavItems>
    </RootStyle>
  );
};

export default CustomerProfile;
