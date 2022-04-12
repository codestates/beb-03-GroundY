import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({account, setAccount}) => {
  const connectWallet = async () => {
	const accounts = await window.ethereum.request({
	  method: 'eth_requestAccounts'
	});

	setAccount(accounts[0]);
  }

  return (
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/tokenlist">
        <button>TokenList</button>
      </Link>
      <Link to="/mint">
        <button>Mint</button>
      </Link>
	  <div>
		<button onClick={() => {connectWallet();}}>Log in with Metamask</button>
		<span>Address: {account}</span>
	  </div>
    </div>
  );
};

export default NavBar;
