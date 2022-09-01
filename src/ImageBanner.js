import React from "react";
import bodaCivil from "./assets/bodaCivil.jpeg";
import styled from "styled-components";

const ImageBannerContainer = styled.div`
  img {
    max-width: 100%;
  }
`;

const ImageBanner = () => {
  return (
    <ImageBannerContainer>
      <img src={bodaCivil} alt="banner"></img>
    </ImageBannerContainer>
  );
};

export default ImageBanner;
