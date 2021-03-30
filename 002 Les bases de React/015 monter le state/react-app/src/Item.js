import {useState} from 'react'

function Item (props){

    const [itemState, setItemState] = useState('Item state !')

    // console.log(props);

    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={() => props.func(itemState)}>Change state</button>
            
        </div>
    )

}

export default Item;