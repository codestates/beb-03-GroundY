// import packages
import React from "react";
import { useState } from "react";
import styled from "styled-components";

// import ABI
import erc721Abi from "../../abi/erc721Abi";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 50%;
  height: 80%;
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
  max-width: 100%;
`;

function Modal({ showModal, closeModal, web3, account, token, newErc721addr }) {
  const [to, setTo] = useState("");
  const sendToken = async (tokenAddr, tokenId) => {
    const tokenContract = await new web3.eth.Contract(
      erc721Abi,
      newErc721addr,
      {
        from: account,
      }
    );
    tokenContract.methods
      .transferFrom(account, to, tokenId)
      .send({
        from: account,
      })
      .on("receipt", (receipt) => {
        setTo("");
      });
  };

  return (
    <div>
      {showModal ? (
        <Background onClick={closeModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal}>X</button>
            <img alt="" className="nftimg" src={token.NFTdata.image} />
            <span className="name">{token.name}</span>(
            <span className="symbol">{token.symbol}</span>)
            <div className="nft">#{token.tokenId}</div>
            <div className="nft">{token.NFTdata.name}</div>
            <div className="nft">{token.NFTdata.description}</div>
            <div className="nft">{token.NFTdata.attributes[0].trait_type}</div>
            <div className="nft">{token.NFTdata.attributes[0].value}</div>
            <div className="tokenTransfer">
              To:{" "}
              <input
                type="text"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              ></input>
              <button
                className="sendErc20Btn"
                onClick={sendToken.bind(this, token.address, token.tokenId)}
              >
                send Token
              </button>
            </div>
          </ModalContainer>
        </Background>
      ) : null}
    </div>
  );
}

export default Modal;
