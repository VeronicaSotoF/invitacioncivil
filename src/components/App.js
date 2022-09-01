import React from "react";
import ReactDOM from "react-dom";
import ImageBanner from "./ImageBanner";
import { createGlobalStyle } from "styled-components";
import Banner from "./Banner";

const AppGlobalStyle = createGlobalStyle`
padding: 0px; 
margin: 0px;

body {
  background-color: var(--main-bg-color);
  min-height: 98vh;
  padding: 0px;
  margin: 0px;
  font-family: 'Poppins', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}
.shadow {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.glass {
  background: rgba( 255, 255, 255, 0.7 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
} 
.glass > h1, h2, h3, p, div, a, button {
  filter: none !important;
  -webkit-backdrop-filter: none;
}
:root {
  --main-bg-color: white;
  --secondary-bg-color: rgba(183,193,80,0.7) ;
  --main-text-color: white;
  --main-title-color: black;
  --accent-color: #A78556;
}
`;

const App = () => {
  return (
    <div className="main-container">
      <AppGlobalStyle />
      <Banner title={"Verónica y Guillermo"} subtitle="NOS CASAMOS" />
      <ImageBanner />
    </div>
  );
};

export default App;
