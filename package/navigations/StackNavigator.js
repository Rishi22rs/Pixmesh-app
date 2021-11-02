// In App.js in a new project

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default StackNavigator;