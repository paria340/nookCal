import 'react-native-gesture-handler';
import React from 'react';
import DrawerNavigator from './components/DrawingNavigator';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { tab1, tab2 } from './Components/Screens'
import { Button } from 'react-native';

// const Stack = createStackNavigator();
// const Tabs = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();


// function Tabbing() {
//   return (
//     <Tabs.Navigator screenOptions={{ headerShown: false }}>
//       <Tabs.Screen name="Tab1" component={tab1} />
//       <Tabs.Screen name="Tab2" component={tab2} />
//     </Tabs.Navigator>
//   );
// }

// function Drawering() {
//   return (
//     <Drawer.Navigator >
//       <Drawer.Screen name="Drawer" component={tab1} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (

    <NavigationContainer>

      {/* <Tabs.Navigator>
        <Tabs.Screen name="Tab1" component={tab1} />
        <Tabs.Screen name="Tab2" component={tab2} />
      </Tabs.Navigator> */}

      {/* <Drawer.Navigator >
        <Drawer.Screen name="Drawer" component={tab1} />
        <DrawerItem label="Help" onPress={() => alert('Link to help')} />
      </Drawer.Navigator> */}

      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabbing" component={Tabbing} />
        <Stack.Screen name="Drawering" component={Drawering} />
      </Stack.Navigator> */}
      <DrawerNavigator />
    </NavigationContainer>

  )
}