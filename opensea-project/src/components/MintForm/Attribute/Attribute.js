// import packages
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Button = styled.button.attrs(props => ({
  onClick: props.onClick,
}))`
  
`

const Attribute = ({attributeValues, handleAttribute, addAttribute, removeAttribute}) => {
  return (
	<>
	  {attributeValues.map((el, idx) => (
		<Container key={idx} >
		  <label>Trait Type: </label>
		  <input type='text' name='trait_type' value={el.trait_type || ''} onChange={(e) => {handleAttribute(e, idx);}} />
		  <label>Value: </label>
		  <input type='text' name='value' value={el.value || ''} onChange={(e) => {handleAttribute(e, idx);}} />
		  {
			idx ? 
			  <button onClick={() => {removeAttribute(idx);}}>Remove attribute</button> :
			  null
		  }
		</Container>
	  ))}
	  <button onClick={() => {addAttribute();}} >Add attribute</button>
	</>
  );
}

export default Attribute;
