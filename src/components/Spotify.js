import React from "react";
import "../styles/Spotify.css";
import { spotifyIcon } from "../assets";

export const Spotify = ({ spotifyLink }) => {
  return (
    <div className="spotify-wrapper">
      <a href={spotifyLink} rel="noopener" className="spotify-link">
        <span className="spotify-title">
          <strong>Spotify</strong>
          <img
            src={spotifyIcon}
            className="spotify-icon"
            alt="spotify-icon"
          ></img>
        </span>
      </a>
    </div>
  );
};
