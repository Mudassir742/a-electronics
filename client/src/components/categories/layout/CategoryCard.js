import { Typography, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardWrapper = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down(901)]: {
        marginBottom:'2rem'
      },
}));

const CardContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(to bottom,#E5D396 82%,#F9FAFB 18%)",
  cursor: "pointer",
  padding:'1rem 0 0 0'
}));
const ContentWrapper = styled(Box)(({ theme }) => ({
  margin: "2rem 0 2rem 2rem",
}));
const CardHeading = styled(Typography)(({ theme }) => ({}));
const CardInfo = styled(Typography)(({ theme }) => ({
  margin: "1rem 0",
}));
const CardButton = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  paddingBottom:'.2rem',
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
}));
const Image = styled("img")(({ theme }) => ({
  width: "85%",
  maxWidth:'402px',
  maxHeight:'272px'
}));

const CategoryCard = ({ image,heading,info }) => {
  return (
    <CardWrapper className="cardWrapper" item md={4} sm={6} xs={12}>
      <CardContainer>
        <ContentWrapper>
          <CardHeading variant="h4">{heading}</CardHeading>
          <CardInfo>{info}</CardInfo>
          <CardButton className="cardButton">Shop</CardButton>
        </ContentWrapper>
        <ImageWrapper>
          <Image src={image} alt="card" />
        </ImageWrapper>
      </CardContainer>
    </CardWrapper>
  );
};

export default CategoryCard;
