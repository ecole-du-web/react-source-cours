import React from 'react'
import {useLocation} from 'react-router-dom'

export default function Contact() {

    const location = useLocation();
    console.log(location.state.txt);


    return (
        <h1>{location.state.txt}</h1>
    )
}
