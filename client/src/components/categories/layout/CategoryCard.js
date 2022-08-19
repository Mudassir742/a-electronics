import { Typography, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardWrapper = styled(Grid)(({ theme }) => ({
  background: "linear-gradient(to bottom,#E5D396 82%,#F9FAFB 18%)",
  cursor:"pointer",
}));
const ContentWrapper = styled(Box)(({ theme }) => ({
    margin:'2rem 0 2rem 2rem'
}));
const CardHeading = styled(Typography)(({ theme }) => ({}));
const CardInfo = styled(Typography)(({ theme }) => ({
    margin:'1rem 0'
}));
const CardButton = styled(Typography)(({ theme }) => ({
    fontWeight:'bold'
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
    width:'100%',
    display:'flex',
    justifyContent:'flex-end'
}));
const Image = styled("img")(({ theme }) => ({
    width:'85%'
}));

const CategoryCard = ({ image }) => {
  return (
    <CardWrapper item md={3.8}>
      <ContentWrapper>
        <CardHeading variant="h4">Weekly Deals</CardHeading>
        <CardInfo>Get Deals Each Week.</CardInfo>
        <CardButton>Shop</CardButton>
      </ContentWrapper>
      <ImageWrapper>
      <Image src={image} alt="card"/>

      </ImageWrapper>
    </CardWrapper>
  );
};

export default CategoryCard;
