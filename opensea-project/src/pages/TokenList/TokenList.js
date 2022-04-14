import React from "react";

// import packages
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// import components
import Erc721 from "../../components/Erc721/Erc721";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

// import ABI
import erc721Abi from "../../abi/erc721Abi";

function TokenList({ web3, account }) {
  const [erc721list, setErc721list] = useState([]);
  const [newErc721addr, setNewErc721Addr] = useState(
    "0xb66df44befEdc0Cc63CD80F9F08EFC99CB9451fe"
  );
  const [onLoading, setOnLoading] = useState();

  const addNewErc721Token = async () => {
    setErc721list([]);

    const tokenContract = await new web3.eth.Contract(erc721Abi, newErc721addr);
    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();

    const metaData = function (tokenURI) {
      return axios.get(tokenURI).then((res) => res.data);
    };

    setOnLoading(true);

    let arr = [];
    for (let i = 1; i <= totalSupply; i++) {
      arr.push(i);
    }
    for (let tokenId of arr) {
      let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
      if (String(tokenOwner).toLowerCase() === account) {
        let NFTdata = await metaData(
          await tokenContract.methods.tokenURI(tokenId).call()
        );
        setErc721list((prevState) => {
          return [...prevState, { name, symbol, tokenId, NFTdata }];
        });
      }
    }

    setOnLoading(false);
  };

  return (
    <div className="tokenlist">
      <div className="newErc721">
        <button onClick={addNewErc721Token}>View your GroundY NFT</button>
        or
        <input
          // value로 초깃값
          type="text"
          onChange={(e) => {
            setNewErc721Addr(e.target.value);
            // 입력받을 때마다 newErc721addr 갱신
          }}
        ></input>
        <button onClick={addNewErc721Token}>Enter ERC Contract Address!</button>
      </div>
      {onLoading ? (
        <LoadingIndicator />
      ) : (
        <Erc721
          web3={web3}
          account={account}
          erc721list={erc721list}
          newErc721addr={newErc721addr}
        />
      )}
    </div>
  );
}

export default TokenList;
