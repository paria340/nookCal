import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { tab1, tab2 } from './Components/Screens'
import { Button } from 'react-native';

// const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (

    <NavigationContainer>

      {/* <Tabs.Navigator>
        <Tabs.Screen name="Tab1" component={tab1} />
        <Tabs.Screen name="Tab2" component={tab2} />
      </Tabs.Navigator> */}

      <Drawer.Navigator >
        <Drawer.Screen name="Drawer" component={tab1} />
        {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
      </Drawer.Navigator>

      {/* <Tabs.Navigator>
        <Tabs.Screen name="Tab1" component={tab1} />
        <Tabs.Screen name="Tab2" component={tab2} />
      </Tabs.Navigator> */}

    </NavigationContainer>

  )
}