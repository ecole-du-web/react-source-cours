import React from 'react'

export default function Content(props) {
    console.log(props);
    return (
        <div className="content">
            {props.children}
        </div>
    )
}
