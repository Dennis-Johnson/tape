import React from "react";
import "./Spotify.css";
import spotifyLogo from "./spotifyIcon.png";

export default function Spotify(props) {
  return (
    <div className="spotify-wrapper">
      <a href={props.spotifyLink} rel="noopener" className="spotify-link">
        <span className="spotify-title">
          <strong>Spotify</strong>
          <img
            src={spotifyLogo}
            className="spotify-icon"
            alt="spotify-icon"
          ></img>
        </span>
      </a>
    </div>
  );
}
