import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <NavBarWrapper>
      <Link to="/">
        <NavLink>Home</NavLink>
      </Link>
      <Link to="/archive">
        <NavLink>Archive</NavLink>
      </Link>
      <Link to="/about">
        <NavLink>About</NavLink>
      </Link>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
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
