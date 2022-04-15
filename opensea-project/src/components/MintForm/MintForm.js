// import packages
import React from 'react';
import styled from 'styled-components';

// import components
import Attribute from './Attribute/Attribute';

// create styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: solid black 1px;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`;

const Label = styled.label`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
	'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
	sans-serif;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 10px;
`;

const Input = styled.input.attrs(props => ({
  type: props.type,
  name: props.name,
  value: props.value || '',
  onChange: props.onChange
}))`
  border-radius: 25px;
  width: 300px;
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

const MintForm = ({submit, retrieveImage, attributeValues, handleAttribute, addAttribute, removeAttribute, data, handleData}) => {
  return (
	<>
	  <Container>
		<ItemContainer>
		  <Label>Image</Label>
		  <input type='file' name='image' onChange={retrieveImage} />
		</ItemContainer>
		<ItemContainer>
		  <Label>Name</Label>
		  <Input type='text' name='name' value={data.name} onChange={handleData} />
		</ItemContainer>
		<ItemContainer>
		  <Label>Description</Label>
		  <Input type='text' name='description' value={data.description} onChange={handleData} />
		</ItemContainer>
		<Attribute attributeValues={attributeValues} handleAttribute={handleAttribute} addAttribute={addAttribute} removeAttribute={removeAttribute} />
	  </Container>
	  <Button onClick={() => {submit();}}>Mint</Button>
	</>
  );
}

export default MintForm;
