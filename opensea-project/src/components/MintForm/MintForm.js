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
`;

const Input = styled.input.attrs(props => ({
  type: props.type,
  name: props.name,
  value: props.value || '',
  onChange: props.onChange
}))`

`;

const MintForm = ({submit, retrieveImage, attributeValues, handleAttribute, addAttribute, removeAttribute, data, handleData}) => {
  return (
	<>
	  <Container>
		<ItemContainer>
		  <Label>Image: </Label>
		  <input type='file' name='image' onChange={retrieveImage} />
		</ItemContainer>
		<ItemContainer>
		  <Label>Name: </Label>
		  <Input type='text' name='name' value={data.name} onChange={handleData} />
		</ItemContainer>
		<ItemContainer>
		  <Label>Description: </Label>
		  <Input type='text' name='description' value={data.description} onChange={handleData} />
		</ItemContainer>
		<Attribute attributeValues={attributeValues} handleAttribute={handleAttribute} addAttribute={addAttribute} removeAttribute={removeAttribute} />
	  </Container>
	  <button onClick={() => {submit();}}>Submit</button>
	</>
  );
}

export default MintForm;
