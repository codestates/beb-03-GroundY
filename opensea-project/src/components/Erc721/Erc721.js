import React from "react";

// Import packages
import { useState } from "react";
import styled from "styled-components";

// Import components
import Modal from "../Modal/Modal";

const Erc721list = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Erc721token = styled.div`
  width: 30%;
  overflow: auto;
  margin: 1%;
  border: 1px solid green;
`;

function Erc721({ web3, account, erc721list, newErc721addr }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Erc721list>
      {erc721list.map((token) => {
        return (
          <Erc721token>
            <span className="name">{token.name}</span>(
            <span className="symbol">{token.symbol}</span>)
            <div className="nft">#{token.tokenId}</div>
            <img
              alt=""
              className="nftimg"
              src={token.NFTdata.image}
              onClick={openModal}
            />
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
      })}
    </Erc721list>
  );
}
export default Erc721;
