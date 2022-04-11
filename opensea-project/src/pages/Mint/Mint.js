import React, {useState} from 'react';

// import packages
import {create} from 'ipfs-http-client';

// import components
import MintForm from '../../components/MintForm/MintForm';

const Mint = ({web3, account}) => {
  const [image, setImage] = useState();
  const [metadata, setMetadata] = useState({});

  const retrieveImage = (e) => {
	const data = e.target.files[0];
	const reader = new window.FileReader();

	reader.readAsArrayBuffer(data);
	reader.onloadend = () => {
	  setImage(Buffer(reader.result));
	}
  }

  const submit = async () => {
	// create ipfs object
	const ipfs = create('https://ipfs.infura.io:5001/api/v0');

	const added = await ipfs.add(image);
	const url = `https://ipfs.infura.io/ipfs/${added.path}`;
	console.log(url);
  }

  return (
	<div>
	  <MintForm submit={submit} retrieveImage={retrieveImage} />
	</div>
  );
}

export default Mint;
