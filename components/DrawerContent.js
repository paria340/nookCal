import React from "react";
import { View, Text, Alert } from "react-native"
import { useState } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

export function DrawerContent(props) {


    const [setup, setSetup] = React.useState('')
    const[punchline, setPunchline] = React.useState('')

    const dataFetching = () => {
        const apiURL = 'https://v2.jokeapi.dev/joke/Any?type=twopart'
        axios({
            url: apiURL,
            method: 'GET',
            responseType: 'json',
        }).then(response => {
            console.log(response)
            setSetup(response.data.setup)
            setPunchline(response.data.delivery)
            alert(response.data.setup)
            // As Alert.alert does not work on Web, I am just loading the page containing the delivery/punchline here
            // Note: The alert() waits for the okay button and then the next line is executed
            alert(response.data.delivery)
        })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response)
                }
            })

    }

    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    return (
        <View>
            <DrawerContentScrollView {...props}>
                <View>
                    <Text>Main Content</Text>
                </View>
            </DrawerContentScrollView>
            <DrawerItem
                label="Show me a joke"
                onPress={() => {dataFetching()}}
            />
        </View>
    )
}