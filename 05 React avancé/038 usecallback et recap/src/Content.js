import React from 'react'

function Content(props) {
    console.log("Mise à jour");
    return (
        <div className="content">
            {props.children}
        </div>
    )
}
export default React.memo(Content);