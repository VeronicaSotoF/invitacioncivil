import React from "react";
import styled from "styled-components";
import ContentCard from "./ContentCard";
import externalLink from "../assets/externalLink.png";
import civil from "../assets/civil.png";

const InfoSectionContainer = styled.div`
  margin: 2rem 0rem;
`;

const InfoSection = () => {
  return (
    <InfoSectionContainer>
      <ContentCard
        logo={civil}
        linkImg={externalLink}
        title="CEREMONIA CIVIL"
        paragraph="Terraza María Bonita. C. Ignacio Ramírez 1880, Jardines del Country, 44210 Guadalajara, Jal."
        time="15:00 hrs"
        link="https://goo.gl/maps/nvVGJJXpcnDKScPp9"
        //mapImg={locationChurch}
      />
    </InfoSectionContainer>
  );
};

export default InfoSection;
