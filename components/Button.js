import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: black;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

export default (props) => {
  return (
    <Container onPress={props.onPress}>
      <Label>{props.children}</Label>
    </Container>
  )
}