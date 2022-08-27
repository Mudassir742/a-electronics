//material
import {
  CardContainer,
  ImageWrapper,
  Image,
  ProductInfoContainer,
  ProductInfo,
  ProductPriceContainer,
  ProductRating,
  ButtonContainer,
  CardButton,
} from "./ProductStyles";
import Icon from "src/components/Iconify";

const ProductCard = ({image,name,price}) => {
  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={image && image[0].imageURL} alt="laptop-image" />
      </ImageWrapper>
      <ProductInfoContainer>
        <ProductInfo variant="h5" marginBottom=".6rem">
          {name}
        </ProductInfo>
        <ProductPriceContainer>
          <ProductInfo fontSize="1.1rem">`${price} $`</ProductInfo>
          <ProductRating>
            <ProductInfo fontSize="1.1rem">4.8(20)</ProductInfo>
            <Icon icon="eva:star-fill" width={28} height={28} color="#FBED21" />
          </ProductRating>
        </ProductPriceContainer>
        <ButtonContainer>
          <CardButton
            startIcon={<Icon icon="akar-icons:plus" width={28} height={28} />}
          >
            Add to Cart
          </CardButton>
        </ButtonContainer>
      </ProductInfoContainer>
    </CardContainer>
  );
};

export default ProductCard;
