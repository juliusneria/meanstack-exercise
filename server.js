var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var Nexmo = require('nexmo');
var compression = require("compression");
var app = express();

var nexmo = new Nexmo({
    apiKey: '75033c65',
    apiSecret: 'gQs7otAcTZyPUob8'
});

app.set('port', (process.env.PORT || 5000));
app.use(require('body-parser').urlencoded({
    extended: false
}));
// Handle GET webhook
app.get('/delivery-receipt-webhook', function(req, res) {
    handleWebhook(req.query, res);
});
// Handle POST webhook
app.post('/delivery-receipt-webhook', function(req, res) {
    handleWebhook(req.body, res);
});

function handleWebhook(params, res) {
    if (!params['status'] || !params['messageId']) {
        console.log('This is not a delivery receipt');
    } else {
        //This is a DLR, check that your message has been delivered correctly
        if (params['status'] !== 'delivered') {
            console.log("Fail:", params['status'], ": ", params['err-code']);
        } else {
            console.log("Success");
        }
    }
    res.sendStatus(200);
}

app
    .route('/webhooks/inbound-sms')
    .get(handleInboundSms)
    .post(handleInboundSms);

function handleInboundSms(request, response) {
    console.log(request, response);
    var params = Object.assign(request.query, request.body)
    console.log(params);
    response.status(204).send()
}

app.listen(app.get('port'), function() {
    console.log('Example app listening on port', app.get('port'));
});
/*app.listen(app.get('port'), function() {
    console.log('Example app listening on port', app.get('port'));
});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));*/


/*var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, function () {
    console.log('ExpressJs started at localhost:8080!');
});*/

exports = module.exports = app;

