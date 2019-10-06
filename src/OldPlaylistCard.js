import React from "react";
import styled from "styled-components";
import spotifyLogo from "./spotifyIcon.png";
import appleIcon from "./appleIconWhite.svg";

const Card = styled.div`
  position: relative;
  height: 20vh;
  width: 100%;
  background-color: cadetblue;
  margin: 20px auto;
  padding-top: 1px;
  border-radius: 6px;
  filter: drop-shadow(5px 5px 5px black);
`;
const Chapter = styled.h3`
  color: white;
  width: 98%;
  margin: 5px auto;
  text-align: center;
  font-weight: 100;
  border-radius: 6px;
  background-color: black;
`;
const LogoContainer = styled.div`
  position: absolute;
  width: 40%;
  right: 5%;
  top: 35%;
  text-align: center;
  padding-top: 10px;
`;
const LogoWrapper = styled.div`
  margin-right: 10px;
  display: inline-block;
  background-color: ${props => (props.spotify ? "#009688" : "#f44336")};
  border-radius: 6px;
  filter: drop-shadow(1px 2px 1px black);
`;
const Logo = styled.img`
  height: 25px;
  margin: 6px;
  vertical-align: middle;
`;
const GenreWrapper = styled.div`
  position: relative;
  width: 40%;
  left: 5%;
  top: 20%;
`;
const Genre = styled.div`
  display: inline;
  background-color: #ffeb3b;
  color: black;
  padding: 5px 5px;
  margin: 5px;
  border-radius: 5px;
`;
export default function OldPlaylistCard(props) {
  return (
    <Card>
      <Chapter>
        {props.Chapter}: {props.Name}
      </Chapter>
      <LogoContainer>
        <LogoWrapper>
          <a href={props.AppleLink} rel="noopener">
            <Logo src={appleIcon} alt="apple-logo" />
          </a>
        </LogoWrapper>
        <LogoWrapper spotify>
          <a href={props.SpotifyLink} rel="noopener">
            <Logo src={spotifyLogo} alt="spotify-logo" />
          </a>
        </LogoWrapper>
      </LogoContainer>
      <GenreWrapper>
        {props.Genres.map((genre, index) => (
          <Genre key={index}>{genre}</Genre>
        ))}
      </GenreWrapper>
    </Card>
  );
}
