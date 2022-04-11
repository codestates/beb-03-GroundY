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
import erc721Abi from "./erc721Abi";

// Import components
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [erc721list, setErc721list] = useState([]);
  const [newErc721addr, setNewErc721Addr] = useState();

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

  const addNewErc721Token = async () => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, newErc721addr);
    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    let arr = [];
    for (let i = 1; i <= totalSupply; i++) {
      arr.push(i);
    }
    for (let tokenId of arr) {
      let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
      if (String(tokenOwner).toLowerCase() === account) {
        let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
        setErc721list((prevState) => {
          return [...prevState, { name, symbol, tokenId, tokenURI }];
        });
      }
    }
  };

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
      <div className="newErc721">
        <input
          type="text"
          onChange={(e) => {
            setNewErc721Addr(e.target.value);
            // 입력받을 때마다 newErc721addr 갱신
          }}
        ></input>
        <button onClick={addNewErc721Token}>add new erc721</button>
      </div>
      <TokenList web3={web3} account={account} erc721list={erc721list} />
    </div>
  );
}

export default App;
