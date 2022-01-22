import { ScreenContainer } from "react-native-screens"
import React from "react"
import { View, Text, StyleSheet, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

export const tab1 = ({ navigation }) => {
    return (
        <ScreenContainer>
            {/* <Text>Hello this is Tab 2</Text> */}
        </ScreenContainer>
    )
}

export const tab2 = ({ navigation }) => {
    return (
        <ScreenContainer>
            {/* <Text>Hello this is Tab 2</Text> */}
            {/* <Button 
                title="tab2"
                onPress={() =>
                    navigation.push("tabing", {name: "tab2 is open"})
                }
            /> */}

            {/* <Button title="Drawer" onPress={() => navigation.toggleDrawer()} /> */}
        </ScreenContainer>
    )
}

