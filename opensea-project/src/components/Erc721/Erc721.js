import React from "react";

// Import packages
import styled from "styled-components";

// Import components
import SeeToken from "../SeeToken/SeeToken";

const Erc721list = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Erc721({ web3, account, erc721list, newErc721addr }) {
  return (
    <Erc721list>
      {erc721list.map((token) => {
        return (
          <SeeToken
            token={token}
            web3={web3}
            account={account}
            newErc721addr={newErc721addr}
          ></SeeToken>
        );
      })}
    </Erc721list>
  );
}
export default Erc721;
