var twit = require('twit');
var https = require("https");
var express = require('express');
var bodyParser = require('body-parser');

var config = require('./config.js');
var packageInfo = require('./package.json');

var app = express();
var Twitter = new twit(config);

app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.json({ version: packageInfo.version });
});

var server = app.listen(process.env.PORT, "0.0.0.0", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Web server started at http://%s:%s', host, port);
});

function tweet(data, hora, volumeDescoberto, volumeSantaMaria) {
    console.log("tweet");
    text = data + " - " + hora + " - Volume Descoberto: " + volumeDescoberto + hashtags;
	
    Twitter.post('statuses/update', {status: text}, function (error, tweet, response) {
        if (error) {
            console.log(error);
        }
    });

    text = data + " - " + hora + " - Volume Santa Maria: " + volumeSantaMaria + hashtags;
	
    Twitter.post('statuses/update', {status: text}, function (error, tweet, response) {
        if (error) {
            console.log(error);
        }
    });
	
};



setInterval(function () {
    https.get("https://nivelbarragemdf-bot.herokuapp.com");
}, 300000);
