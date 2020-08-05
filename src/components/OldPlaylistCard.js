import React from "react";
import styled from "styled-components";
import { spotifyIcon, appleIcon } from "../assets";

export const OldPlaylistCard = ({
  Chapter,
  Name,
  AppleLink,
  SpotifyLink,
  Genres,
}) => {
  return (
    <Card>
      <ChapterNumber>
        {Chapter}: {Name}
      </ChapterNumber>
      <LogoContainer>
        <LogoWrapper>
          <a href={AppleLink} rel="noopener">
            <Logo src={appleIcon} alt="apple-logo" />
          </a>
        </LogoWrapper>
        <LogoWrapper spotify>
          <a href={SpotifyLink} rel="noopener">
            <Logo src={spotifyIcon} alt="spotify-logo" />
          </a>
        </LogoWrapper>
      </LogoContainer>
      <GenreWrapper>
        {Genres.map((genre, index) => (
          <Genre key={index}>{genre}</Genre>
        ))}
      </GenreWrapper>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  height: 20vh;
  width: 100%;
  background-color: cadetblue;
  margin: 30px auto;
  padding-top: 1px;
  border-radius: 6px;
  filter: drop-shadow(5px 5px 5px black);

  @media only screen and (min-width: 430px) {
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    width: 70%;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
  @media only screen and (min-width: 1440px) {
    width: 40%;
  }
`;
const ChapterNumber = styled.h3`
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
  background-color: ${(props) => (props.spotify ? "#009688" : "#f44336")};
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
