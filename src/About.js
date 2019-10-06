import React from "react";
import styled from "styled-components";
import dennis from "./dennis.jpg";
const Wrapper = styled.div`
  min-height: 80vh;
  background-color: #24305e;
  padding: 15px;
  font-family: "Anton", sans-serif;
`;
const Card = styled.div`
  position: relative;
  width: 90%;
  background-color: ${props => (props.instagram ? "#f44336" : "#ffeb3b")};
  color: black;
  margin: 30px auto;
  padding: 2px 0;
  border-radius: 6px;
  filter: drop-shadow(5px 5px 5px black);
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


export default function About() {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={dennis}></Img>
      </ImgWrapper>

      <Card>
        <Text>
          Hey, I'm Dennis.
          <br /> Tape is a small project to house all my playlists in one place
          made with ReactJS and hosted on Github pages. DM me for bugs or
          recommedations :)
        </Text>
      </Card>
    </Wrapper>
  );
}
