import React from "react";
import { useState } from 'react'
import { View, Text } from "react-native"
import { useFocusEffect } from '@react-navigation/native';
import DrawerNavigator from "./DrawingNavigator";

import axios from 'axios'
export default function ApiFetch({navigation}) {
    const [setup, setSetup] = React.useState('')
    const[punchline, setPunchline] = React.useState('')

    useFocusEffect(
        React.useCallback(() => {
            let isActive = true;

            dataFetching()
            
            return () => {
                isActive = false;
            };
        }, [])
    );

    const dataFetching = () => {
        const apiURL = 'https://v2.jokeapi.dev/joke/Any?type=twopart'
        axios({
            url: apiURL,
            method: 'GET',
            responseType: 'json',
        }).then(response => {
            console.log(response)
            console.log(response.data.setup)
            setSetup(response.data.setup)
            setPunchline(response.data.delivery)
        })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response)
                }
            })

    }
    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {setup}
                {console.log('hello')}
                {/* <Button onPress={() => navigation.goBack()} title="Dismiss" /> */}
            </View>
        </>
    )
}