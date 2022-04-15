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
  height: 10%;
  padding: 40px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;

const ModalButton = styled.button.attrs(props => ({
  onClick: props.onClick,
}))`
  color: white;
  background: teal;
  padding: .375rem .75rem;
  border: 1px solid teal;
  borderRadius: .25rem;
  fontSize: 1rem;
  lineHeight: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  cursor: pointer;
  width: 10em;
  margin: 0 auto;
`;

const Alert = styled.div`
  margin: auto;
`;

const MintModal = ({isNoAccount, isNoInfo, closeModal}) => {
  return (
	<>
	  <ModalBackdrop>
		<ModalView>
		  <Alert>{
			isNoAccount ? 
			  'You must connect with Metamask' : 
			  isNoInfo ?
				'You must fill both image and name field' :
				<div><div>One step  to go!</div><div>Please sign transaction with Metamask!</div></div>
		  }</Alert>
		  <ModalButton onClick={closeModal}>Close</ModalButton>
		</ModalView>
	  </ModalBackdrop>
	</>
  );
}

export default MintModal;
