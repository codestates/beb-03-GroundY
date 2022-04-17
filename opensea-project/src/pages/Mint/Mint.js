import React, {useState} from 'react';

// import packages
import {create} from 'ipfs-http-client';
import styled from 'styled-components';

// import components
import MintForm from '../../components/MintForm/MintForm';
import MintModal from '../../components/MintForm/MintModal/MintModal';

// import ABI
import erc721Abi from '../../abi/erc721Abi';

const Container = styled.div`
  background-color: rgb(255, 92, 77);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fcb27b'/%3E%3Cstop offset='1' stop-color='%23fcb27b' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffad2d'/%3E%3Cstop offset='1' stop-color='%23ffad2d' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fff594'/%3E%3Cstop offset='1' stop-color='%23fff594' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FF5C4D'/%3E%3Cstop offset='1' stop-color='%23FF5C4D' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFF1D7'/%3E%3Cstop offset='1' stop-color='%23FFF1D7' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FCFF46'/%3E%3Cstop offset='1' stop-color='%23FCFF46' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  padding: 10px 0;
  width: 100vw;
  height: 100vh;
`;

const Mint = ({web3, account}) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({name: '', description: ''});
  const [attributeValues, setAttributeValues] = useState([{trait_type: '', value: ''}]);

  const [isModal, setIsModal] = useState(false);
  const [isNoAccount, setIsNoAccount] = useState(false);
  const [isNoInfo, setIsNoInfo] = useState(false);

  const closeModal = () => {
	setIsModal(false);
	setIsNoAccount(false);
	setIsNoInfo(false);
  }

  const handleData = (e) => {
	const newData = {...data};
	newData[e.target.name] = e.target.value;
	setData(newData);
  }

  const handleAttribute = (e, idx) => {
	const newAttributes = [...attributeValues];
	newAttributes[idx][e.target.name] = e.target.value;
	setAttributeValues(newAttributes);
  }

  const addAttribute = () => {
	setAttributeValues([...attributeValues, {trait_type: '', value: ''}]);
  }

  const removeAttribute = (idx) => {
	const newAttributes = [...attributeValues];
	newAttributes.splice(idx, 1);
	setAttributeValues(newAttributes);
  }

  const retrieveImage = (e) => {
	const data = e.target.files[0];
	const reader = new window.FileReader();

	reader.readAsArrayBuffer(data);
	reader.onloadend = () => {
	  setImage(Buffer(reader.result));
	}
  }

  const submit = async () => {
	setIsModal(true);
	if(account === undefined) {
	  setIsNoAccount(true);
	  return;
	}
	if(image === null || data.name === '') {
	  setIsNoInfo(true);
	  return;
	}
	// create ipfs object with infura gateway
	const ipfs = create('https://ipfs.infura.io:5001/api/v0');

	const imageAdded = await ipfs.add(image);
	const imageUrl = `https://ipfs.infura.io/ipfs/${imageAdded.path}`;

	const metadataJson = JSON.stringify({...data, 'image': imageUrl, 'attributes': attributeValues});

	const metadataAdded = await ipfs.add(metadataJson);
	const metadataUrl = `https://ipfs.infura.io/ipfs/${metadataAdded.path}`;

	const tokenContract = new web3.eth.Contract(erc721Abi, '0xb66df44befEdc0Cc63CD80F9F08EFC99CB9451fe', {from: account}); 

	tokenContract.methods
	  .mintNFT(account, metadataUrl)
	  .send({from: account});

	setImage(null);
	setData({name: '', description: ''});
	setAttributeValues([{trait_type: '', value: ''}]);
  }

  return (
	<Container>
	  {isModal ? <MintModal isNoAccount={isNoAccount} isNoInfo={isNoInfo} closeModal={closeModal} /> : null}
	  <MintForm submit={submit} retrieveImage={retrieveImage} attributeValues={attributeValues} handleAttribute={handleAttribute} addAttribute={addAttribute} removeAttribute={removeAttribute} data={data} handleData={handleData} />
	</Container>
  );
}

export default Mint;
