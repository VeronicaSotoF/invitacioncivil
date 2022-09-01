import React from "react";
import ReactDOM from "react-dom";
import ImageBanner from "./ImageBanner";

const App = () => {
  return (
    <div>
      <ImageBanner />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
