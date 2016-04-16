var express = require('express');
var Redis = require('redis');

var redis = Redis.createClient("6379", "redis");

// Constant
var PORT = 8888;

// the express app instance
var app = express();

console.log('working up until here');

// set a home route
app.get('/', function(req, res) {
  redis.incr("tracker");

  redis.get("tracker", function(err, value) {

    var message = "Visited a total of " + value + " times";    
    res.send(message);
  });
});

app.listen(PORT);
console.log('My node app Runnig on http://localhost:' + PORT);
