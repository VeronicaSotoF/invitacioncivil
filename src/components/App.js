import React from "react";
import { createGlobalStyle } from "styled-components";
import Banner from "./Banner";
import Regalos from "./Regalos";
import InfoSection from "./InfoSection";

const AppGlobalStyle = createGlobalStyle`
padding: 0px; 
margin: 0px;

body {
  background-color: var(--main-bg-color);
  background: url('https://images.unsplash.com/photo-1505744288177-8a097ba01de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80');
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
  background: rgba( 255, 255, 255, 0.8 );
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
  --main-bg-color: floralwhite;
  --secondary-bg-color: rgb(255 255 255 / 92%);
  --main-text-color: white;
  --main-title-color: black;
  --accent-color: lightslategray;
  --accent-btn: #bb4a99;
}
`;

const App = () => {
  return (
    <div className="main-container">
      <AppGlobalStyle />
      <Banner title={"Verónica y Guillermo"} subtitle="NOS CASAMOS" />
      {/* <ImageBanner /> */}
      <InfoSection />
      <Regalos phrase="Tu presencia es nuestro mayor regalo, pero si quieres tener un detalle con nosotros, puedes visitar nuestra mesa de regalos." />
    </div>
  );
};

export default App;
