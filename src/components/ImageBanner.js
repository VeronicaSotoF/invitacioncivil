import React from "react";
import foto from "../assets/foto.jpg";
import styled from "styled-components";

const ImageBannerContainer = styled.div`
  
  img {
    max-width: 100%;
`;

const ImageBanner = () => {
  return (
    <ImageBannerContainer>
      <img src={foto} alt="banner"></img>
    </ImageBannerContainer>
  );
};

export default ImageBanner;
