import React from "react";
import "../styles/Apple.css";
import { appleIcon } from "../assets";

export default function Apple(props) {
  return (
    <div className="apple-music-wrapper">
      <a href={props.appleLink} rel="noopener" className="apple-link">
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
