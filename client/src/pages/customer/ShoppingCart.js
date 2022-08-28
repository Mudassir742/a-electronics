//material
import { Box, Typography, Stack, Grid, Card, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
//redux
import { useSelector } from "react-redux";
//components
import CartItem from "src/components/shopping-cart/CartItem";

//-----------------------------------------------------------
const RootStyle = styled("section")(({ theme, stickey }) => ({
  padding: "8rem 5rem 4rem 5rem",
  background: "#EFEEEA",
  [theme.breakpoints.down(661)]: {
  padding: "6rem 2rem 1rem 2rem",
  },
}));
const CartContainer = styled(Box)(({ theme, stickey }) => ({}));

const Divider = styled(Box)(({ theme, stickey }) => ({
  borderBottom: "1px solid #D5D5D5",
  marginBottom: "1rem",
}));

const OrderSummary = styled(Card)(({ theme, stickey }) => ({
  borderRadius: "5px",
  padding: "1.5rem",
  marginTop: "3rem",
}));

const CardButton = styled(Button)(({ theme }) => ({
  display: "flex",
  height: "40px",
  width: "100%",
  alignItems: "center",
  background: "#050704",
  color: "white",
  borderRadius: "5px",
  "&:hover": {
    background: "#2C3038",
  },
}));

//-----------------------------------------------------------

const ShoppingCart = () => {
  const { cartItems } = useSelector((state) => state.cartItems);

  return (
    <RootStyle>
      <Stack marginTop="2rem">
        <Typography
          variant="h3"
          marginLeft="1rem"
          textAlign="center"
          color="#050704"
        >
          BAG
        </Typography>
        {/* <Button color="custom">Clear</Button> */}
      </Stack>
      <Grid container margin="2rem 0" spacing={1}>
        <Grid item lg={8} xs={12}>
          <CartContainer>
            {cartItems &&
              cartItems.map((item) => (
                <>
                  <CartItem
                    ItemImage={item.image}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.unitPrice}
                    key={item.itemId}
                    model={item.model}
                  />
                  <Divider key={item.itemId} />
                </>
              ))}
          </CartContainer>
        </Grid>
        <Grid item lg={4} md={6} sm={8} xs={12}>
          <OrderSummary>
            <Typography
              textAlign="center"
              marginBottom="2rem"
              variant="h5"
              color="#050704"
            >
              Order Summary
            </Typography>
            <Box marginBottom="1rem">
              <Stack
                direction="row"
                justifyContent="space-between"
                marginBottom="1rem"
              >
                <Typography color="#050704">Items Subtotal:</Typography>
                <Typography>$15.0</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                marginBottom="1rem"
              >
                <Typography color="#050704">Shipping Fee:</Typography>
                <Typography>$0.0</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                marginBottom="1rem"
              >
                <Typography color="#050704">Tax:</Typography>
                <Typography>$0.0</Typography>
              </Stack>
              <Divider sx={{ marginTop: "1rem" }} />
              <Stack
                direction="row"
                justifyContent="space-between"
                marginBottom="1rem"
              >
                <Typography color="#050704" fontWeight="bold">
                  Total:
                </Typography>
                <Typography color="#050704" fontWeight="bold">
                  $15.0
                </Typography>
              </Stack>
            </Box>
            <CardButton>Proceed to Checkout</CardButton>
          </OrderSummary>
        </Grid>
      </Grid>
    </RootStyle>
  );
};

export default ShoppingCart;
