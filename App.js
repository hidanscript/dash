import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './DashFiles/Screens/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <HomeScreen />;
}
