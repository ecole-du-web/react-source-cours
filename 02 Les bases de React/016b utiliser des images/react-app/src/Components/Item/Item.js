import {useState} from 'react'
import './Item.css'
import img1 from './img1.jpg'
import cat from './cat.svg'
import {ReactComponent as Cat} from './cat.svg'

function Item (){

    return (
        <div>
            <h1 class="titre-item">Hello depuis Item</h1>
        <img src={img1} alt=""/>
        <img src={cat} alt=""/>
        <Cat/>

        </div>
    )

}

export default Item;