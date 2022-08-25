//material
import {
  Box,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
//components
import Icon from "src/components/Iconify";

const CartItemContainer = styled(Stack)(({ theme, stickey }) => ({
  margin: "3rem 0 3rem 0",
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
  borderRadius: "8px",
}));

const CartItem = ({ItemImage}) => {
  return (
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
        <IconButton color="custom">
          <Icon icon="akar-icons:minus" width={19} height={20} />
        </IconButton>
        <QuantityLabel>2</QuantityLabel>
        <IconButton color="custom">
          <Icon icon="akar-icons:plus" width={20} height={20} />
        </IconButton>
      </ItemQuantity>
      <Stack direction="row" gap="1rem" alignItems="center">
        <Typography fontWeight="bold">1000$</Typography>
        <IconButton color="custom">
          <Icon icon="fluent:delete-12-filled" width={20} height={20} />
        </IconButton>
      </Stack>
    </CartItemContainer>
  );
};

export default CartItem;
