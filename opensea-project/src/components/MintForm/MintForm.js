import React from 'react';

const MintForm = ({submit, retrieveImage}) => {
  return (
	<div>
	  <input type='file' name='image' onChange={retrieveImage} />
	  <input type='text' name='name' />
	  <input type='text' name='description' />
	  <button onClick={() => {submit();}}>Submit</button>
	</div>
  );
}

export default MintForm;
