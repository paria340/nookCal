import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {tab1, tab2} from "./Screens"

import Tabbing from '../components/Tabbing';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Tabbing} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;