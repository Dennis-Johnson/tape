import React from "react";
import styled from "styled-components";
import { dennis } from "../assets";

export const About = () => (
  <Wrapper>
    <ImgWrapper>
      <Img src={dennis}></Img>
    </ImgWrapper>

    <Card>
      <Text>
        Hey, I'm Dennis.
        <br /> Tape is a small project to house all my playlists. Made with
        ReactJS. DM me for recommedations :)
      </Text>
    </Card>
  </Wrapper>
);

const Wrapper = styled.div`
  min-height: 80vh;
  background-color: #24305e;
  padding: 15px;
  font-family: "Anton", sans-serif;
`;
const Card = styled.div`
  position: relative;
  width: 95%;
  background-color: ${(props) => (props.instagram ? "#f44336" : "#ffeb3b")};
  color: black;
  margin: 30px auto;
  padding: 10px 0;
  box-sizing: border-box;
  border-radius: 6px;
  filter: drop-shadow(5px 5px 5px black);

  @media only screen and (min-width: 425px) {
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
  @media only screen and (min-width: 1440px) {
    width: 40%;
  }
`;
const ImgWrapper = styled.div`
  width: 25vh;
  height: 25vh;
  padding: 5px;
  margin: 10px auto;
  background: #f44336;
  border-radius: 5px;
  filter: drop-shadow(5px 5px 5px black);
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;
const Text = styled.div`
  margin: 10px auto;
  width: 96%;
`;
