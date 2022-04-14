// import packages
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 92, 77, 0.3);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fcb27b'/%3E%3Cstop offset='1' stop-color='%23fcb27b' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffad2d'/%3E%3Cstop offset='1' stop-color='%23ffad2d' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fff594'/%3E%3Cstop offset='1' stop-color='%23fff594' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF5C4D'/%3E%3Cstop offset='1' stop-color='%23FF5C4D' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFF1D7'/%3E%3Cstop offset='1' stop-color='%23FFF1D7' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FCFF46'/%3E%3Cstop offset='1' stop-color='%23FCFF46' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: flex-start;
  height: 4em;
  line-height: 4em;
  padding: 0 10px 0 10px;
`;

const Items = styled.div`
  line-height: 4em;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Item = styled.div`
  padding: 0 10px 0 10px;
  &:hover {
    background-color: rgb(255, 255, 255, 0.5);
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 1.2rem;
  padding: 0;
  &:hover {
    color: grey;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  &:hover {
    color: grey;
  }
`;

const NavBar = ({ account, connectWallet, isLoggedIn }) => {
  return (
    <Container>
      <Logo>
        <StyledLink to="/">Ground Y</StyledLink>
      </Logo>
      <Items>
        <Item>
          <StyledLink to="/">Home</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/tokenlist">Token List</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/mint">Mint</StyledLink>
        </Item>
        <Item>
          <Button
            onClick={() => {
              connectWallet();
            }}
          >
            {isLoggedIn ? "Logged in" : "Log in with Metamask"}
          </Button>
        </Item>
      </Items>
    </Container>
  );
};

export default NavBar;
