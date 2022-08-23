//material
import {
  Box,
  Typography,
  Stack,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
//components
import ItemImage from "src/assets/omenLaptop.png";
import Icon from "src/components/Iconify";

//-----------------------------------------------------------
const RootStyle = styled("section")(({ theme, stickey }) => ({
  padding: "8rem 5rem 4rem 5rem",
  background: "#EFEEEA",
}));
const CartContainer = styled(Grid)(({ theme, stickey }) => ({
  border: "1px solid black",
}));
const CartItemContainer = styled(Stack)(({ theme, stickey }) => ({
  margin: "3rem 1rem",
}));
const CartItemCard = styled(Box)(({ theme, stickey }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));
const Image = styled("img")(({ theme }) => ({
  height: "auto",
  width: "120px",
  maxWidth: "120px",
}));
const ItemInfo = styled(Box)(({ theme, stickey }) => ({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
}));

const ItemQuantity = styled(Stack)(({ theme, stickey }) => ({}));

const QuantityLabel = styled(Typography)(({ theme, stickey }) => ({
  border: "1px solid black",
  width: "40px",
  padding: ".2rem 0",
  textAlign: "center",
  borderRadius: "5px",
}));

//-----------------------------------------------------------

const ShoppingCart = () => {
  return (
    <RootStyle>
      <Grid container margin="2rem 0" spacing={2}>
        <Grid item md={8}>
          <CartContainer>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h4" color="custom">
                Items
              </Typography>
              <Button color="custom">Clear</Button>
            </Stack>
            <CartItemContainer
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <CartItemCard>
                <Image src={ItemImage} alt="item" />
                <ItemInfo>
                  <Typography>Omen Laptop 12th Gen</Typography>
                  <Typography>HP</Typography>
                </ItemInfo>
              </CartItemCard>

              <ItemQuantity direction="row" gap=".6rem" alignItems="center">
                <IconButton>
                  <Icon icon="akar-icons:minus" width={19} height={20} />
                </IconButton>
                <QuantityLabel>2</QuantityLabel>
                <IconButton>
                  <Icon icon="akar-icons:plus" width={20} height={20} />
                </IconButton>
              </ItemQuantity>

              <Typography fontWeight="bold">1000$</Typography>
            </CartItemContainer>
          </CartContainer>
        </Grid>
      </Grid>
    </RootStyle>
  );
};

export default ShoppingCart;
