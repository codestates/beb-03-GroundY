// import packages
import React from "react";
import styled from "styled-components";

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
  width: 25%;
  height: 3rem;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 10px;
  font-size: 1.5rem;
  margin: auto;
`;

const Warning = styled.div`
  color: black;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;
const MintModal = ({ closeModal }) => {
  return (
    <>
      <ModalBackdrop>
        <ModalView>
          <ModalButton onClick={closeModal}>X</ModalButton>
          <Warning>you need to connect wallet.</Warning>
        </ModalView>
      </ModalBackdrop>
    </>
  );
};

export default MintModal;
