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

import LaptopImage from "src/assets/omenLaptop.png";
import Icon from "src/components/Iconify";

const ProductCard = () => {
  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={LaptopImage} alt="laptop-image" />
      </ImageWrapper>
      <ProductInfoContainer>
        <ProductInfo variant="h5" marginBottom=".6rem">
          Hp-Omen Laptop
        </ProductInfo>
        <ProductPriceContainer>
          <ProductInfo fontSize="1.1rem">1000 $</ProductInfo>
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
