let mqtt = require("mqtt")
let options = {
    port: 1883,
};
let client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
// let client = mqtt.connect('mqtt://127.0.0.1', options);

//publish a message to a topic
client.on('connect', function(){
    console.log('Connected');
    client.subscribe('presence', function(err){
        if(!err){
            client.publish('presence', 'hey mqtt', function(){
                console.log("Message pushed");
            });
        }
    })
})
