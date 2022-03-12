import React from "react";
import Content from "./components/Content/ContentComponent";
import Saniflora from "./components/Saniflora/SanifloraComponent";
import "./App.css";
import Button from "./components/Button/ButtonComponent";

function App() {
  return (
    <div className="saniflora">
      <div className="presentation">
        <Saniflora />
        <Content />
        <Button />
      </div>
    </div>
  );
}

export default App;
