// import packages
import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: pink;
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
	background: yellow;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
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

const NavBar = ({account, connectWallet, isLoggedIn}) => {
  return (
	<Container>
	  <Logo>
		<StyledLink to='/'>Ground Y</StyledLink>
	  </Logo>
	  <Items>
		<Item>
		  <StyledLink to="/">
			Home
		  </StyledLink>
		</Item>
		<Item>
		  <StyledLink to="/tokenlist">
			Token List
		  </StyledLink>
		</Item>
		<Item>
		  <StyledLink to="/mint">
			Mint
		  </StyledLink>
		</Item>
		<Item>
		  <Button onClick={() => {connectWallet();}}>{isLoggedIn ? 'Logged in' : 'Log in with Metamask'}</Button>
		</Item>
	  </Items>
	</Container>
  );
};

export default NavBar;
