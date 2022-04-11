// import packages
import React from "react";
import { useState } from "react";

// import pages
import Erc721 from "./Erc721";
import erc721Abi from "../../abi/erc721Abi";

function TokenList({ web3, account }) {
  const [erc721list, setErc721list] = useState([]);
  const [newErc721addr, setNewErc721Addr] = useState();

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
    <div className="tokenlist">
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
      <Erc721 web3={web3} account={account} erc721list={erc721list} />
    </div>
  );
}

export default TokenList;
