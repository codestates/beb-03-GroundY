import React, {useState} from 'react';

// import packages
import {create} from 'ipfs-http-client';

// import components
import MintForm from '../../components/MintForm/MintForm';
import MintModal from '../../components/MintForm/MintModal/MintModal';

// import ABI
import erc721Abi from '../../abi/erc721Abi';

const Mint = ({web3, account}) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({name: '', description: ''});
  const [attributeValues, setAttributeValues] = useState([{trait_type: '', value: ''}]);

  const [isModal, setIsModal] = useState(false);
  const [isNoAccount, setIsNoAccount] = useState(false);

  const closeModal = () => {
	setIsModal(false);
	setIsNoAccount(false);
  }

  const handleData = (e) => {
	const newData = {...data};
	newData[e.target.name] = e.target.value;
	setData(newData);
	console.log(data);
  }

  const handleAttribute = (e, idx) => {
	const newAttributes = [...attributeValues];
	newAttributes[idx][e.target.name] = e.target.value;
	setAttributeValues(newAttributes);
	console.log(attributeValues);
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
	// create ipfs object with infura gateway
	const ipfs = create('https://ipfs.infura.io:5001/api/v0');

	const imageAdded = await ipfs.add(image);
	const imageUrl = `https://ipfs.infura.io/ipfs/${imageAdded.path}`;

	const metadataJson = JSON.stringify({...data, 'image': imageUrl, 'attributes': attributeValues});

	const metadataAdded = await ipfs.add(metadataJson);
	const metadataUrl = `https://ipfs.infura.io/ipfs/${metadataAdded.path}`;
	console.log(metadataUrl);
	const tokenContract = new web3.eth.Contract(erc721Abi, '0xb66df44befEdc0Cc63CD80F9F08EFC99CB9451fe', {from: account}); 
	
	tokenContract.methods
	  .mintNFT(account, metadataUrl)
	  .send({from: account});

	setImage(null);
	setData({name: '', description: ''});
	setAttributeValues([{trait_type: '', value: ''}]);
  }

  return (
	<>
	  {isModal ? <MintModal isNoAccount={isNoAccount} closeModal={closeModal} /> : null}
	  <MintForm submit={submit} retrieveImage={retrieveImage} attributeValues={attributeValues} handleAttribute={handleAttribute} addAttribute={addAttribute} removeAttribute={removeAttribute} data={data} handleData={handleData} />
	</>
  );
}

export default Mint;
