import React from "react";
import styled from "styled-components";

import LoadingImage from "./Loadingimage.gif";

const Loading = styled.div`
  padding: 20%;
`;

function LoadingIndicator({ account }) {
  return (
    <Loading>
      {account ? (
        <img src={LoadingImage} alt=""></img>
      ) : (
        <div>you need to connect wallet first</div>
      )}
    </Loading>
  );
}

export default LoadingIndicator;
