import React from "react";
import { cassetteTape } from "../assets";
import "../styles/App.css";

export const Description = (props) => {
  const { Chapter, Name, Description } = props.current;
  return (
    <div className="cassette-wrapper">
      <span className="chapter">{Chapter}</span>
      <img src={cassetteTape} className="cassette" alt="cassette"></img>
      <div className="description">
        <div className="title">{Name}</div>
        <div className="text">
          <strong>
            {Description}
            <br></br>Tell me what you think :)
          </strong>
        </div>
      </div>
    </div>
  );
};
