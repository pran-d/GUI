import React from "react";
import { useState } from "react";
let mqtt = require("mqtt")
// let options = {
//     port: 9001,
// };
// let client = mqtt.connect('mqtt://127.0.0.1', options);

function ServerSend(){
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");
    const sendMessage=(event)=>{
        event.preventDefault();
        console.log("connecting");
        let client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt');
        // let client = mqtt.connect('wss://localhost:1883/mqtt');
        //publish a message to a topic
        client.on('connect', function(){
            console.log('Connected');
            client.subscribe(topic, function(err){
                if(!err){
                    client.publish(topic, message, function(){
                        console.log("Message pushed");
                    });
                }
            })
        })
    }
    return(
        <form onSubmit={sendMessage}>
            <label>Topic
                <input type="text" value={topic} onChange={(e)=>setTopic(e.target.value)}/>
            </label>
            <label>Message
                <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
            </label>
            <input type="submit" />
      </form>
    )
}

export {ServerSend};