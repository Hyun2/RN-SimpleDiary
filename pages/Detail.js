import React from 'react';
import Container from '../components/Container'
import Contents from '../components/Contents'
import Button from '../components/Button'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-community/async-storage';

const Text = styled.Text`
  font-size: 18px;
  line-height: 28px;
`;

export default ({ navigation, route }) => {
  navigation.setOptions({ title: route.params.date })
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const load = async () => {
    const data = await AsyncStorage.getItem('list')
    if (data) {
      const list = JSON.parse(data)
      const diary = (list.find(item => item.date === route.params.date));
      setTitle(diary.title)
      setText(diary.text)
    }
  }
  React.useEffect(() => {
    load()
  }, [])

  return (
    <Container>
      <Contents>
        <Text>{title}</Text>
        <Text>{text}</Text>
      </Contents>
      <Button onPress={() => { navigation.goBack() }}>목록으로</Button>
    </Container>
  )
}