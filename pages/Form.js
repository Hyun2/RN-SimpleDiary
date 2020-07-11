import React from 'react';
import { Text } from 'react-native'
import Container from '../components/Container'
import Contents from '../components/Contents'
import Button from '../components/Button'
import styled from 'styled-components/native'
import AsycStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-community/async-storage';

const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`
const Input = styled.TextInput`
  width: 100%;
  border: 1px solid gray;
  padding: 8px;
  font-size: 18px;
  margin-bottom: 12px;
  border-radius: 6px;
`;


export default ({ navigation }) => {
  const [date, setDate] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  const store = async () => {
    if (!date || !title || !text) return;

    let list = await AsyncStorage.getItem('list')
    if (list) {
      list = JSON.parse(list);
    } else {
      list = [];
    }

    list.push({
      date, title, text
    })

    await AsyncStorage.setItem('list', JSON.stringify(list));
    navigation.goBack();
  }

  return (
    <Container>
      <Contents>
        <Label>날짜</Label>
        <Input placeholder="YYYY-MM-DD" value={date} onChangeText={(value) => setDate(value)} />
        <Label>제목</Label>
        <Input value={title} onChangeText={(value) => setTitle(value)} />
        <Label>내용</Label>
        <Input multiline style={{ height: 200 }} value={text} onChangeText={value => setText(value)} />
      </Contents>
      <Button onPress={store}>저장</Button>
    </Container>
  )
}