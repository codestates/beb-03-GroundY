// Import packages
import React from "react";
import { useState } from "react";

// Import pages
import "./Erc721.css";
import erc721Abi from "../../abi/erc721Abi";

function Erc721({ web3, account, erc721list }) {
  const [to, setTo] = useState("");
  const sendToken = async (tokenAddr, tokenId) => {
    const tokenContract = await new web3.eth.Contract(
      erc721Abi,
      (tokenAddr = "0x29E7A26c581a6798e9b78D7F27116c40cE78F2c6"),
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
    <div className="erc721list">
      {erc721list.map((token) => {
        return (
          <div className="erc721token">
            <span className="name">Name : {token.name}</span>(
            <span className="symbol">{token.symbol}</span>)
            <div className="nft">id: {token.tokenId}</div>
            <img className="nftimg" src={token.NFTdata.image} />
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
          </div>
        );
      })}
    </div>
  );
}
export default Erc721;
