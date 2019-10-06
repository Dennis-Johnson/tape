import React from "react";
import "./Apple.css";
import appleIcon from "./appleIconWhite.svg";

export default function Apple(props) {
  return (
    <div className="apple-music-wrapper">
      <a
        href={props.appleLink}
        rel="noopener"
        className="apple-link"
      >
        <span className="apple-title">
          <strong>Apple Music </strong>
        </span>
        <img
          src={appleIcon}
          alt="apple-music-icon"
          className="apple-icon"
        ></img>
      </a>
    </div>
  );
}
