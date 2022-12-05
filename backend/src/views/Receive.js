import React from "react"

function Receive(props){
    return(
        <div>
            <p>Message received on topic1: {props.message1}</p>
            <p>Message received on topic2: {props.message2}</p>
        </div>
    );
}

export {Receive};