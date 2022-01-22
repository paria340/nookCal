import React from "react";
import { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';

import axios from 'axios'
export default function ApiFetch() {
    const [joke, setJoke] = React.useState('')

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
        const apiURL = 'https://v2.jokeapi.dev/joke/Any?type=single'
        axios({
            url: apiURL,
            method: 'GET',
            responseType: 'json',
        }).then(response => {
            console.log(response)
            console.log(response.data.joke)
            setJoke(response.data.joke)
        })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response)
                }
            })

    }
    return (
        <>
            <section>
                {joke}
            </section>
        </>
    )
}