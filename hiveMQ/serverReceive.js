let mqtt = require("mqtt")
let options = {
    port: 9001,
};
let client = mqtt.connect('mqtt://127.0.0.1', options);

client.on('connect', function(){
    console.log('Connected');
    client.subscribe('topic1', function(){
        client.on('message', function(topic, message, packet){
            console.log('Received "'+message+'" on "'+topic+'"');
        });
    });
})
