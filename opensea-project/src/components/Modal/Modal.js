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
  width: 60%;
  height: 60%;
  padding: 16px;
  background: white;
  border-radius: 10px;
  text-align: center;
  max-width: 100%;
  display: flex;
`;

const Nftimg = styled.img`
  padding: 1rem;
  max-width: 60%;
  height: 100%;
  width: auto;
  border-right: 1px solid rgba(100, 100, 100, 0.3);
`;
const Nftinfo = styled.div``;

const Closebutton = styled.button`
  position: absolute;
  margin: 0 0 5% 17%;
  width: 2rem;
  border: none;
  background-color: white;
  color: rgba(100, 100, 100, 0.9);
  font-weight: 800;
  font-size: 1.8rem;
`;

const Data = styled.div`
  text-align: left;
  padding: 1rem 2rem 0 1rem;
`;
const Name = styled.div`
  color: black;
  font-weight: 800;
  font-size: 1.8rem;
  margin: 0 0 10% 0;
`;
const Description = styled.div`
  color: rgba(60, 60, 60, 0.9);
  font-weight: 800;
  font-size: 1rem;
  margin: 0 0 5% 0;
`;

const Hr = styled.hr`
  border: 1px solid rgba(100, 100, 100, 0.3);
  margin-left: 0.5rem;
`;

const Addressinput = styled.input`
  width: 90%;
  height: 2.5rem;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 10px;
  font-size: 1.5rem;
  margin: 40% 0 0 0;
`;

const SendButton = styled.button`
  width: 25%;
  height: 3rem;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 10px;
  font-size: 1.5rem;
  margin: 0.5rem;
`;

function Modal({
  showModal,
  closeModal,
  web3,
  account,
  token,
  newErc721addr,
  TokenName,
  TokenInfo,
}) {
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

  const enterAddress = (e) => {
    if (e.keyCode === 13) {
      {
        sendToken.bind(this, token.address, token.tokenId);
      }
    }
  };
  return (
    <div>
      {showModal ? (
        <Background onClick={closeModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <Nftimg alt="" className="nftimg" src={token.NFTdata.image} />
            <Nftinfo>
              <Closebutton onClick={closeModal}>X</Closebutton>
              <TokenName>{token.name}</TokenName>
              <TokenInfo className="symbol">
                {token.symbol} - #{token.tokenId}
              </TokenInfo>
              <Hr></Hr>
              <Data>
                <Name className="nft">{token.NFTdata.name}</Name>
                <Description className="nft">
                  {token.NFTdata.description}
                </Description>
                {token.NFTdata.attributes.map((attributes, index) => {
                  return (
                    <div key={index}>
                      <Description>
                        {attributes.trait_type} {attributes.value}
                      </Description>
                    </div>
                  );
                })}
              </Data>
              <div className="tokenTransfer">
                <Addressinput
                  type="text"
                  placeholder="enter recipient address"
                  value={to}
                  onChange={(e) => {
                    setTo(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    enterAddress(e);
                  }}
                ></Addressinput>
                <SendButton
                  className="sendErc20Btn"
                  onClick={sendToken.bind(this, token.address, token.tokenId)}
                >
                  Send
                </SendButton>
              </div>
            </Nftinfo>
          </ModalContainer>
        </Background>
      ) : null}
    </div>
  );
}

export default Modal;
