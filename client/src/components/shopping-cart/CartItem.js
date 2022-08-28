//material
import {
  Box,
  Typography,
  Stack,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
//components
import Icon from "src/components/Iconify";

//-----------------------------------------------------------------
const CartItemContainer = styled(Box)(({ theme, stickey }) => ({
  margin: "3rem 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down(661)]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap:'1rem'
  },
}));
const CartItemCard = styled(Box)(({ theme, stickey }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.down(661)]: {
    alignItems: "flex-start",
  },
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

//--------------------------------------------------------------------

const CartItem = ({ ItemImage, name, price, quantity, model }) => {
  const match = useMediaQuery("(max-width:660px)");

  return (
    <CartItemContainer>
      <CartItemCard>
        <Image src={ItemImage} alt="item" />
        <ItemInfo>
          <Typography>{name}</Typography>
          <Typography sx={{ display: match ? "none" : "inline-block" }}>
            {model}
          </Typography>
          <Typography
            sx={{ display: match ? "inline-block" : "none" }}
          >{`$${price}`}</Typography>
        </ItemInfo>
      </CartItemCard>

      <ItemQuantity direction="row" gap=".6rem" alignItems="center">
        <IconButton color="custom" disabled={quantity === 1}>
          <Icon icon="akar-icons:minus" width={19} height={20} />
        </IconButton>
        <QuantityLabel>{quantity}</QuantityLabel>
        <IconButton color="custom">
          <Icon icon="akar-icons:plus" width={20} height={20} />
        </IconButton>
      </ItemQuantity>
      <Stack direction="row" gap="1rem" alignItems="center">
        <Typography
          sx={{ display: match ? "none" : "inline-block" }}
        >{`$${price}`}</Typography>
        <IconButton color="custom">
          <Icon icon="fluent:delete-12-filled" width={20} height={20} />
        </IconButton>
      </Stack>
    </CartItemContainer>
  );
};

export default CartItem;
