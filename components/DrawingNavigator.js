import React from "react";


import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import Tabbing from '../components/Tabbing';
import ApiFetch from "../components/ApiFetch";



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  
  return (

   <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Tabbing} />
      <Drawer.Screen name="Show me a joke" component={ApiFetch} />
    </Drawer.Navigator> 
  
  )
}
export default DrawerNavigator
