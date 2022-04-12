import React from 'react';

// import components
import Attribute from './Attribute/Attribute';

const MintForm = ({submit, retrieveImage, attributeValues, handleAttribute, addAttribute, removeAttribute, data, handleData}) => {
  return (
	<div>
	  <div>
		<label>Image: </label>
		<input type='file' name='image' onChange={retrieveImage} />
	  </div>
	  <div>
		<label>Name: </label>
		<input type='text' name='name' value={data.name} onChange={handleData} />
	  </div>
	  <div>
		<label>Description: </label>
		<input type='text' name='description' value={data.description} onChange={handleData} />
	  </div>
	  <Attribute attributeValues={attributeValues} handleAttribute={handleAttribute} addAttribute={addAttribute} removeAttribute={removeAttribute} />
	  <button onClick={() => {submit();}}>Submit</button>
	</div>
  );
}

export default MintForm;
