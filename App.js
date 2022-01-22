import 'react-native-gesture-handler';
import React from 'react';
import DrawerNavigator from './components/DrawingNavigator';

import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (

    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>

  )
}