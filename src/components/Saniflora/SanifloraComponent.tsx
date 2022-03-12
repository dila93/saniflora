import React, { Component, CSSProperties } from "react";
import "./saniflora.css";
import backflora from "./backflora.gif";

const textImage: CSSProperties = {
  backgroundImage: `url(${backflora})`,
  backgroundSize: "650px 200px",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
};

export default class Saniflora extends Component {
  render() {
    return (
      <div className="container">
        <div style={textImage} className="saniflora-text">
          Saniflora
        </div>
      </div>
    );
  }
}
