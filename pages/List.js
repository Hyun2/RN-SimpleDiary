import React from 'react';
import Container from '../components/Container'
import Contents from '../components/Contents';
import Button from '../components/Button'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-community/async-storage';

const ListItem = styled.TouchableOpacity`
  width: 100%;
  padding-bottom: 3px;
  margin-bottom: 10px;
  border-bottom-color: #aaaaaa;
  border-bottom-width: 1px;
`
const Label = styled.Text`
  font-size: 18px;

`;

export default ({ navigation }) => {
  const [list, setList] = React.useState([]);
  const load = async () => {
    const data = await AsyncStorage.getItem('list')
    if (data) {
      const loaded = JSON.parse(data);
      setList(loaded.sort((a, b) => new Date(a.date) - new Date(b.date)));
    }
  }

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      load(); // 실제 프로덕션에서 데이터 로드 시 사용
    });
    load(); // 핫 리로딩에서 로드 안되어서, 프로덕션이랑은 무관한 코드

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <Contents>
        {
          list.map((item, idx) => (
            <ListItem key={idx} onPress={() => navigation.navigate('Detail', { date: item.date })}>
              <Label>{item.date} {item.title}</Label>
            </ListItem>
          ))
        }
      </Contents>
      <Button onPress={() => navigation.navigate('Form')}>새 글 작성</Button>
    </Container>
  )
}