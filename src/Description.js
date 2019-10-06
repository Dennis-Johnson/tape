import React from "react";
import cassette from "./cassette-tape.png";
import "./App.css";

export default function Description(props) {
  return (
    <div className="cassette-wrapper">
      <span className="chapter">{props.current.Chapter}</span>
      <img src={cassette} className="cassette" alt="cassette"></img>
      <div className="description">
        <div className="title">{props.current.Name}</div>
        <div className="text">
          <strong>
            {props.current.Description}<br></br>Tell me
            what you think :)
          </strong>
        </div>
      </div>
    </div>
  );
}
