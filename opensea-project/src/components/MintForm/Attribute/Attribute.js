// import packages
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  border: solid 1px black;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
`;

const Button = styled.button.attrs(props => ({
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
`;

const Input = styled.input.attrs(props => ({
  type: props.type,
  name: props.name,
  value: props.value || '',
  onChange: props.onChange
}))`
  border-radius: 25px;
  margin-bottom: 20px;
  width: 300px;
`;

const Attribute = ({attributeValues, handleAttribute, addAttribute, removeAttribute}) => {
  return (
	<>
	  <Container>
	  {attributeValues.map((el, idx) => (
		<ItemContainer key={idx} >
		  <label>Trait Type</label>
		  <Input type='text' name='trait_type' value={el.trait_type || ''} onChange={(e) => {handleAttribute(e, idx);}} />
		  <label>Value</label>
		  <Input type='text' name='value' value={el.value || ''} onChange={(e) => {handleAttribute(e, idx);}} />
		  {
			idx ? 
			  <Button onClick={() => {removeAttribute(idx);}}>Remove attribute</Button> :
			  null
		  }
		</ItemContainer>
	  ))}
	  </Container>
	  <Button onClick={() => {addAttribute();}} >Add attribute</Button>
	</>
  );
}

export default Attribute;
