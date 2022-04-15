// import packages
import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

// import components
import Erc721 from "../../components/Erc721/Erc721";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

// import ABI
import erc721Abi from "../../abi/erc721Abi";

// import images
import ethimg from "./images/eth.png";

const Userinfo = styled.div`
  display: flex;
  width: max-content;
  margin: 1.5rem auto;
  padding: 0.7rem 1rem;
  border: 2px solid rgba(246, 194, 203, 0.5); //pink
  border-radius: 50px;
`;

const Address = styled.div`
  margin: auto;
  color: rgba(100, 100, 100, 0.7);
  font-weight: bold;
`;

const Hr = styled.hr`
  border: 1px solid rgba(100, 100, 100, 0.3);
`;

const Nftbutton = styled.button`
  width: 25%;
  height: 3rem;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 10px;
  font-size: 1.5rem;
  margin: 0.5rem;
`;
const Addressinput = styled.input`
  width: 25%;
  height: 3rem;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 10px;
  font-size: 1.5rem;
  margin: 0.5rem;
`;

function TokenList({ web3, account }) {
  const [erc721list, setErc721list] = useState([]);
  const [newErc721addr, setNewErc721Addr] = useState(
    "0xb66df44befEdc0Cc63CD80F9F08EFC99CB9451fe"
  );
  const [onLoading, setOnLoading] = useState();
  const addressInput = useRef();

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

  const enterKey = (e) => {
    if (e.keyCode === 13) {
      addNewErc721Token();
      setNewErc721Addr("0xb66df44befEdc0Cc63CD80F9F08EFC99CB9451fe");
    }
  };

  // const clearInput = () => {
  //   addressInput.current.value = "";
  // };

  return (
    <div>
      <Userinfo>
        <img src={ethimg} alt="no image" width={32} />
        <Address>
          {account ? account : <div>need to connect wallet</div>}
        </Address>
      </Userinfo>
      <div className="tokenlist">
        <Nftbutton
          onClick={() => {
            addNewErc721Token();
            // clearInput();
          }}
        >
          View your GroundY NFT
        </Nftbutton>
        <Addressinput
          // value로 초깃값
          type="text"
          placeholder="or enter contract address here!"
          onChange={(e) => {
            setNewErc721Addr(e.target.value);
          }}
          onKeyDown={(e) => {
            enterKey(e);
          }}
        ></Addressinput>
        {/* <button onClick={addNewErc721Token}>
            Enter ERC Contract Address!
          </button> */}
        <Hr></Hr>
        {onLoading ? (
          <LoadingIndicator account={account} />
        ) : (
          <Erc721
            web3={web3}
            account={account}
            erc721list={erc721list}
            newErc721addr={newErc721addr}
          />
        )}
      </div>
    </div>
  );
}

export default TokenList;
