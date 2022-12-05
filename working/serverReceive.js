let mqtt = require("mqtt")

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

const options = {
    keepalive: 30,
    clientId: clientId,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
      topic: 'WillMsg',
      payload: 'Connection Closed abnormally..!',
      qos: 0,
      retain: false
    },
    rejectUnauthorized: false
  }

let client = mqtt.connect('ws://localhost:1884/mqtt', options);
// let client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');

client.on('connect', function(){
    console.log('Connected');
    client.subscribe('topic1', function(){
        client.on('message', function(topic, message, packet){
            console.log('Received "'+message+'" on "'+topic+'"');
        });
    });
})

// const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

// // const host = 'ws://broker.emqx.io:8083/mqtt'
// const host = 'mqtt://broker.emqx.io:1883'

// const options = {
//   keepalive: 60,
//   clientId: clientId,
//   protocolId: 'MQTT',
//   protocolVersion: 4,
//   clean: true,
//   reconnectPeriod: 1000,
//   connectTimeout: 30 * 1000,
//   will: {
//     topic: 'WillMsg',
//     payload: 'Connection Closed abnormally..!',
//     qos: 0,
//     retain: false
//   },
// }

// const client = mqtt.connect(host, options)

// client.on('error', (err) => {
//   console.log('Connection error: ', err)
//   client.end()
// })

// client.on('reconnect', () => {
//   console.log('Reconnecting...')
// })