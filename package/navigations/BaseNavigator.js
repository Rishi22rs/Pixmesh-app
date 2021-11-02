import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { ThemePalette } from '../theme/ThemePalette';

const BaseNavigator=()=>{
  return(
    <NavigationContainer theme={ThemePalette.light}>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default BaseNavigator