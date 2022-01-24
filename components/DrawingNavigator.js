import React from "react";

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import Tabbing from '../components/Tabbing';
import ApiFetch from "../components/ApiFetch";
import { DrawerContent } from "../components/DrawerContent";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (

    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Tabbing} />
    </Drawer.Navigator>

  )
}
export default DrawerNavigator
