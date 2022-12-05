var express = require('express');
var app = express();

app.get('/', function (req, res) {
  client.on('connect', function() {
        console.log("Connection Successful");
        client.subscribe('MQTT-Examples');

    });
    var content;
    client.on('message', function (topic, message) {
    content = message;
      console.log(message.toString());
    });
res.render('index', { title: content });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});