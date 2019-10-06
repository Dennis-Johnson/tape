import React, { Component } from "react";
import styled from "styled-components";
import OldPlaylistCard from "./OldPlaylistCard";

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
export default class PreviousPlaylists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(
      "https://script.google.com/macros/s/AKfycbyjWSWQakwG3Z4WrQZu_WqknHIlFdfXyzKyMxxs0OArjFTgTa4/exec"
    )
      .then(response => response.json())
      .then(data => this.setState({ info: data.slice(0,data.length-1), isLoading: false }))
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
    }
    return (
      <Wrapper>
        {this.state.info.map((info, index) => (
          <OldPlaylistCard
            key={index}
            Chapter={info.Chapter}
            Name={info.Name}
            AppleLink={info.AppleLink}
            SpotifyLink={info.SpotifyLink}
            Genres={info.Genres}
          />
        ))}
      </Wrapper>
    );
  }
}
