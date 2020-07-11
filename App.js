// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './pages/List';
import Detail from './pages/Detail';
import Form from './pages/Form';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ title: "일기 목록" }} name="List" component={List} />
        <Stack.Screen options={{ title: "일기 상세" }} name="Detail" component={Detail} />
        <Stack.Screen options={{ title: "일기 작성" }} name="Form" component={Form} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;