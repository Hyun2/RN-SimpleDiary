import React from 'react';
import { View, Text, Button } from 'react-native';

export default ({ navigation }) => {
  return (
    <View>
      <Text>Form</Text>
      <Button title='목록으로' onPress={() => navigation.goBack()} />
    </View>
  )
}