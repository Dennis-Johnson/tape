import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Bars from "./Bars";
import PreviousPlaylists from "./PreviousPlaylists";
import About from "./About";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const NavBar = styled.div`
  width: 100%;
  height: 13px;
  padding: 10px;
  background-color: #272324;
  text-decoration: none;
  filter: drop-shadow(1px 1px 10px black);
`;
const NavLink = styled.div`
  display: inline-block;
  width: 33%;
  height: 100%;
  color: white;
  text-align: center;
  text-decoration: none;
  :hover {
    cursor: pointer;
    color: #00bab7;
  }
`;

export default class App extends Component {
  render() {
    return (
      <HomeContainer>
        <Router>
          <h1 className="App-header">Tape</h1>
          <Bars />

          <NavBar>
            <Link to="/">
              <NavLink>Home</NavLink>
            </Link>
            <Link to="/old">
              <NavLink>Old Playlists</NavLink>
            </Link>
            <Link to="/about">
              <NavLink>About</NavLink>
            </Link>
          </NavBar>

          <Route exact path="/" component={Home} />
          <Route path="/old" component={PreviousPlaylists} />
          <Route path="/about" component={About} />
        </Router>
      </HomeContainer>
    );
  }
}
