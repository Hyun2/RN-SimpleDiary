import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ navigation }) => {
  return (
    <View>
      <Text>List</Text>
      <Button title="Detail 페이지로" onPress={() => navigation.navigate('Detail')} />
      <Button title="Form 페이지로" onPress={() => navigation.navigate('Form')} />
    </View>
  )
}