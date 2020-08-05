import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

import { Home, Bars, About, PreviousPlaylists, NavBar } from "./components";

const App = () => {
  return (
    <HomeContainer>
      <Router>
        <h1 className="App-header">Tape</h1>
        <Bars />
        <NavBar />

        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={`/archive`} component={PreviousPlaylists} />
          <Route path={`/about`} component={About} />
        </Switch>
      </Router>
    </HomeContainer>
  );
};

export default App;

const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
