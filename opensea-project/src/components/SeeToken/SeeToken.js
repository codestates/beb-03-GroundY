// import packages
import React from "react";
import { useState } from "react";
import styled from "styled-components";

// import components
import Modal from "../Modal/Modal";

const Erc721token = styled.div`
  width: 28vw;
  height: 60vh;
  overflow: hidden;
  margin: 2.5vw;
  border: 2px solid rgba(177, 240, 226, 0.5); //mint
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 1px 1px 20px #ddd;
`;

const TokenName = styled.div`
  color: rgba(100, 100, 100, 0.9);
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  padding: 0 1rem;
`;

const TokenInfo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  text-align: left;
  padding: 0 1rem 0 1rem;
`;

function SeeToken({ web3, account, token, newErc721addr }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Erc721token>
      <img
        alt=""
        className="nftimg"
        src={token.NFTdata.image}
        onClick={openModal}
      />
      <TokenName>{token.name}</TokenName>
      <TokenInfo>
        {token.symbol} - #{token.tokenId}{" "}
      </TokenInfo>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        web3={web3}
        account={account}
        token={token}
        newErc721addr={newErc721addr}
      ></Modal>
    </Erc721token>
  );
}

export default SeeToken;
