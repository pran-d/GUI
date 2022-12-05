
import React from "react"

function Send(props){
    return(
        <form onSubmit={props.handleSubmit}>
                <label>Topic
                    <input type="text" value={props.topic} onChange={props.onChangeTopic}/>
                </label>
                <label>Message
                    <input type="text" value={props.message} onChange={props.onChangeMessage}/>
                </label>
                <input type="submit" />
        </form>
    )
}

export {Send}