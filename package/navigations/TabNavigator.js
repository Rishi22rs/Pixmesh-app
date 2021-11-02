import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Leaderboard from '../screens/Leaderboard';
import Profile from '../screens/Profile';
import Trending from '../screens/Trending';

const Tab = createBottomTabNavigator();

const TabNavigator= () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Tab.Screen options={{ headerShown: false }} name="Trending" component={Trending} />
      <Tab.Screen options={{ headerShown: false }} name="Leaderboard" component={Leaderboard} />
      <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default TabNavigator