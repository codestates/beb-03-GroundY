// import packages
import React from "react";
import { useState, useEffect } from "react";
import Web3 from "web3";

// import pages
import Erc721 from "./Erc721";
import erc721Abi from "../../erc721Abi";

function TokenList({ web3, account, erc721list }) {
  return (
    <div className="tokenlist">
      <Erc721 web3={web3} account={account} erc721list={erc721list} />
    </div>
  );
}

export default TokenList;
