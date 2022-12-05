let mqtt = require("mqtt")
let options = {
    port: 8000,
};
let topic = 'testtopic/avishkar'
let client = mqtt.connect('wss://broker.mqttdashboard.com', options);

//publish a message to a topic
try{
    client.on('connect', function(){
            console.log('Connected');
            client.subscribe(topic, function(err){
                if(!err){
                    client.publish(topic, 'hey mqtt', function(){
                        console.log("Message pushed");
                    });
                }
            })
        }
    )
}catch(err){
    console.log(err.message)
}
    
