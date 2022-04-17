// import packages
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

// import components
import Erc721 from "../../components/Erc721/Erc721";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import WarningModal from "../../components/WarningModal/WarningModal";

// import ABI
import erc721Abi from "../../abi/erc721Abi";

// import images
import ethimg from "./images/eth.png";

const Container = styled.div`
  background-color: rgb(255, 92, 77);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fcb27b'/%3E%3Cstop offset='1' stop-color='%23fcb27b' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffad2d'/%3E%3Cstop offset='1' stop-color='%23ffad2d' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fff594'/%3E%3Cstop offset='1' stop-color='%23fff594' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF5C4D'/%3E%3Cstop offset='1' stop-color='%23FF5C4D' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFF1D7'/%3E%3Cstop offset='1' stop-color='%23FFF1D7' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FCFF46'/%3E%3Cstop offset='1' stop-color='%23FCFF46' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  padding: 10px 0;
  width: 100vw;
  height: 100vh;
`;

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
const Contractinput = styled.input`
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
  const [isConnect, setIsConnect] = useState(true);

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

  const makeOne = () => {
    setNewErc721Addr("0xb66df44befEdc0Cc63CD80F9F08EFC99CB9451fe");
    addNewErc721Token();
  };

  const closeModal = () => {
    setIsConnect(true);
  };

  return (
    <Container>
      <Userinfo>
        <img src={ethimg} alt="" width={32} />
        <Address>
          {account ? account : <div>need to connect wallet</div>}
        </Address>
      </Userinfo>
      <div className="tokenlist">
        <Nftbutton onClick={() => (account ? makeOne() : setIsConnect(false))}>
          View your GroundY NFT
        </Nftbutton>
        <Contractinput
          // value로 초깃값
          type="text"
          placeholder="or enter contract address here!"
          onChange={(e) => {
            setNewErc721Addr(e.target.value);
          }}
          onKeyDown={(e) => (account ? enterKey(e) : setIsConnect(false))}
        ></Contractinput>
        <Hr></Hr>
        {isConnect ? null : (
          <WarningModal closeModal={closeModal}></WarningModal>
        )}
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
    </Container>
  );
}

export default TokenList;
