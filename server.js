var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/GAMES");
var db_ = mongoose.connection;

db_.once('open', function(){
    console.log('connected to mongoDB');
});

var app = express();

var compression = require("compression");
app.use(compression());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

require("./app/controllers/hero.controller")(app);

app.get("/*", function (req, res) {
    res.sendFile(path.resolve('./public/index.html'));
});


var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, function () {
    console.log('ExpressJs started at localhost:8080!');
});

exports = module.exports = app;

