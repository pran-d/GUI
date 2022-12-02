import React from "react"
import { useState } from "react"
let mqtt = require("mqtt");
// let options = {
//     clientId: 'mosquitto_test',
//     username: 'mosquitto_test',
//     password: 'mosquitto_test',
//     port: 9001
// }
// let client = mqtt.connect('wss://127.0.0.1:1884/mqtt');
let client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt');

function ServerReceive(){
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
    client.on('connect', function(){
        console.log('Connected');
        client.subscribe('topic1', function(){
            client.on('message', function(topic, message, packet){
                if(topic==='topic1'){
                    setMessage1(message.toString());
                    console.log('Received "'+message+'" on "'+topic+'"');
                }
            });
        });
        client.subscribe('topic2', function(){
            client.on('message', function(topic, message, packet){
                if(topic==='topic2'){
                    setMessage2(message.toString());
                    console.log('Received "'+message+'" on "'+topic+'"');
                }
            });
        });
    })

    return(
        <div>
            <p>Message received on topic1: {message1}</p>
            <p>Message received on topic2: {message2}</p>
        </div>
    );
}

export {ServerReceive};