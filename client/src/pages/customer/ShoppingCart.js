//material
import { Box, Typography, Stack, Grid, useScrollTrigger } from "@mui/material";
import { styled } from "@mui/material/styles";
//redux
import { useSelector } from "react-redux";
//components
import ItemImage from "src/assets/omenLaptop.png";
import CartItem from "src/components/shopping-cart/CartItem";

//-----------------------------------------------------------
const RootStyle = styled("section")(({ theme, stickey }) => ({
  padding: "8rem 5rem 4rem 5rem",
  background: "#EFEEEA",
}));
const CartContainer = styled(Box)(({ theme, stickey }) => ({}));

const Divider = styled(Box)(({ theme, stickey }) => ({
  borderBottom: "1px solid #D5D5D5",
  marginBottom: "1rem",
}));

const OrderSummary = styled(Box)(({ theme, stickey }) => ({
  border: "1px solid black",
  padding: "1rem",
}));

//-----------------------------------------------------------

const ShoppingCart = () => {
  const { cartItems } = useSelector((state) => state.cartItems);

  return (
    <RootStyle>
      <Stack direction="row" justifyContent="space-between" marginTop="2rem">
        <Typography variant="h4" color="custom" marginLeft="1rem">
          Items
        </Typography>
        {/* <Button color="custom">Clear</Button> */}
      </Stack>
      <Grid container margin="2rem 0" spacing={2}>
        <Grid item md={8}>
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
        <Grid item md={4}>
          <OrderSummary marginTop="3rem">order summary</OrderSummary>
        </Grid>
      </Grid>
    </RootStyle>
  );
};

export default ShoppingCart;
