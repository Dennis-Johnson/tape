import React, { Component } from "react";
import Spotify from "./Spotify";
import Apple from "./Apple";
import "./App.css";
import Description from "./Description";
import Contact from "./Contact";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 80vh;
  background-color: #24305e;
  padding: 15px;
  font-family: "Anton", sans-serif;
`;
const Title = styled.h2`
  color: white;
  width: 100%;
  padding: 0;
  margin: 0;
`;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(
      "https://script.google.com/macros/s/AKfycbyjWSWQakwG3Z4WrQZu_WqknHIlFdfXyzKyMxxs0OArjFTgTa4/exec"
    )
      .then(response => response.json())
      .then(data =>
        this.setState({ current: data[data.length - 1], isLoading: false })
      )
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <Wrapper>
          <Title>Loading...</Title>
        </Wrapper>
      );
    } else
      return (
        <div className="App">
          <Description current={this.state.current}/>
          <Spotify spotifyLink={this.state.current.SpotifyLink} />
          <Apple appleLink={this.state.current.AppleLink} />
          <Contact />
        </div>
      );
  }
}
