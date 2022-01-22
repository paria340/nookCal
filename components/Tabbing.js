import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {tab1, tab2} from "../components/Screens"

const Tab = createBottomTabNavigator();

const Tabbing = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={tab1} />
      <Tab.Screen name="Tab2" component={tab2} />
    </Tab.Navigator>
  );
};

export default Tabbing;