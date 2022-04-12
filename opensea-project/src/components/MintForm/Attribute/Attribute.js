import React from 'react';

const Attribute = ({attributeValues, handleAttribute, addAttribute, removeAttribute}) => {
  return (
	<div>
	  {attributeValues.map((el, idx) => (
		<div key={idx} >
		  <label>Trait Type: </label>
		  <input type='text' name='trait_type' value={el.trait_type || ''} onChange={(e) => {handleAttribute(e, idx);}} />
		  <label>Value: </label>
		  <input type='text' name='value' value={el.value || ''} onChange={(e) => {handleAttribute(e, idx);}} />
		  {
			idx ? 
			  <button onClick={() => {removeAttribute(idx);}}>Remove attribute</button> :
			  null
		  }
		</div>
	  ))}
	  <button onClick={() => {addAttribute();}} >Add attribute</button>
	</div>
  );
}

export default Attribute;
