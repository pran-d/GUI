import React from "react";
import { useState } from "react";
let mqtt = require("mqtt");
let { Receive } = require("./views/Receive.js");
let host = "localhost";
let port = 1884;
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

// let client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
let client = mqtt.connect(url, options);

function ServerReceive() {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  client.on("connect", function () {
    console.log("Connected");
    client.subscribe("topic1", function () {
      client.on("message", function (topic, message, packet) {
        if (topic === "topic1") {
          setMessage1(message.toString());
          console.log('Received "' + message + '" on "' + topic + '"');
        }
      });
    });
    client.subscribe("topic2", function () {
      client.on("message", function (topic, message, packet) {
        if (topic === "topic2") {
          setMessage2(message.toString());
          console.log('Received "' + message + '" on "' + topic + '"');
        }
      });
    });
  });

  return <Receive message1={message1} message2={message2} />;
}

export { ServerReceive };
