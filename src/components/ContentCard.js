import React from "react";
import styled from "styled-components";

const ContentCardContainer = styled.div`
  border-radius: 12px;
  min-height: 35vh;

  padding: 2rem;
  margin: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 0.3rem;
  text-align: center;

  .map-picture {
    border-radius: 12px;
  }

  .image-container {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .link-container {
    margin-top: 1rem;
    display: flex;
  }

  .ubication-link {
    border-bottom: 1px solid var(--accent-color);
    color: var(--accent-color);
  }

  .external > img {
    vertical-align: unset;
    transform: translate3d(3px, 2.4px, 10px);
    filter: grayscale(1);
  }
`;

const ContentCard = (props) => {
  return (
    <ContentCardContainer className="glass">
      {props.logo && (
        <div className="image-container">
          <img
            alt="logo"
            className="logo"
            src={props.logo}
            width={70}
            height={80}
          />
        </div>
      )}
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
      <span>{props.time}</span>
      <div className="link-container">
        <span className="ubication-link">
          <a href={props.link} target="_blank" rel="noreferrer">
            Ubicación
          </a>
        </span>
        <div className="external">
          <img
            id="external"
            className="external-link"
            src={props.linkImg}
            alt="external img"
            width={15}
            height={15}
          />
        </div>
      </div>
      <div className="image-container">
        <img alt="map" className="map-picture" src={props.mapImg} />
      </div>
    </ContentCardContainer>
  );
};

export default ContentCard;
