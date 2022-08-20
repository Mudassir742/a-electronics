import React from "react";
import {
  BannerContainer,
  BannerContent,
  ItemInfo,
  InfoWrapper,
  OfferHeading,
  OfferDetail,
  ShopButton,
  ItemImage,
  Image,
} from "./BannerStyles";

import BannerImage from "src/assets/electronics.png";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerContent container>
        <ItemInfo item lg={4} md={6} sm={12}>
          <InfoWrapper>
            <OfferHeading>Weekly Deals</OfferHeading>
            <OfferDetail>
              <strong>Save upto 70%</strong> on selected Products. plus get free
              shopping storewide
            </OfferDetail>
            <ShopButton>Shop</ShopButton>
          </InfoWrapper>
        </ItemInfo>
        <ItemImage item lg={8} md={6} sm={12}>
          <Image src={BannerImage} alt="banner" />
        </ItemImage>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
