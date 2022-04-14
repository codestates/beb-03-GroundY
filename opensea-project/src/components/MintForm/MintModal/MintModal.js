// import packages
import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 25%;
  height: 30%;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const ModalButton = styled.button`
  
`;

const MintModal = ({isNoAccount, closeModal}) => {
  return (
	<>
	  <ModalBackdrop>
		<ModalView>
		  <div>{
			isNoAccount ? 
			  'You must connect with Metamask' : 
			  <div><div>One step  to go!</div><div>Please sign transaction with Metamask!</div></div>
		  }</div>
		  <ModalButton onClick={closeModal}>X</ModalButton>
		</ModalView>
	  </ModalBackdrop>
	</>
  );
}

export default MintModal;
