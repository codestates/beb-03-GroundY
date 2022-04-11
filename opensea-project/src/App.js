// Import packages
import { useState, useEffect } from "react";
import Web3 from "web3";

// Import react-router-dom
import { Routes, Route } from "react-router-dom";

// Import CSS
import "./App.css";

// Import pages
import Home from "./pages/Home/Home";
import TokenList from "./pages/TokenList/TokenList";

// Import components
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState();

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  };

  useEffect(() => {
    if (window.ethereum !== undefined) {
      try {
        const web3Obj = new Web3(window.ethereum);
        setWeb3(web3Obj);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tokenlist" element={<TokenList />} />
        {/* <Route path="/mint" element={<Mint />} /> */}
      </Routes>

      <button
        className="metaConnect"
        onClick={() => {
          connectWallet();
        }}
      >
        Connect metamask
      </button>
      <div className="userInfo">Address: {account}</div>
      <Home />
      <TokenList web3={web3} account={account} />
    </div>
  );
}

export default App;
