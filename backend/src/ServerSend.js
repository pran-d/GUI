import React from "react";
import { useState } from "react";
let mqtt = require("mqtt");
let host = "localhost";
let port = 1884;
let { Send } = require("./views/Send.js");
const url = `ws://${host}:${port}/mqtt`;
const options = {
  keepalive: 30,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false,
};
// let client = mqtt.connect('mqtt://127.0.0.1', options);

function ServerSend() {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const handleTopic = (event) => setTopic(event.target.value);
  const handleMessage = (event) => setMessage(event.target.value);
  const sendMessage = (event) => {
    event.preventDefault();
    console.log("connecting");
    // let client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt');
    let client = mqtt.connect(url, options);

    //publish a message to a topic
    client.on("connect", function () {
      console.log("Connected");
      client.subscribe(topic, function (err) {
        if (!err) {
          client.publish(topic, message, function () {
            console.log("Message pushed");
          });
        }
      });
    });
  };
  return (
    <Send
      topic={topic}
      message={message}
      handleSubmit={sendMessage}
      onChangeTopic={handleTopic}
      onChangeMessage={handleMessage}
    />
  );
}

export { ServerSend };
