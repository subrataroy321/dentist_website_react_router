import React from 'react';

function WidgetShow(props) {
    console.log(props)
    return (
        <div>
            <h1>You entered this url parameters: {props.match.params.id}</h1>
            <h2>One procedures we do is {props.procedures[props.match.params.id]}</h2>
        </div>
    )
}

export default WidgetShow;