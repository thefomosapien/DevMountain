var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongojs = require("mongojs");

var app = express();
var port = 3000;
var db = mongojs("eCommerce");

app.use(cors());
app.use(bodyParser.json());

app.listen(port, function() {
    console.log('Now listening on port: ' + port);
});

app.post('/products', function(req, res) {
    return res.status(200).send(req.body);
});

app.get('/products', function(req, res) {
    res.send('');
});

app.put('/products/:id', function(req, res) {
    
});

app.delete('/products/:id', function(req, res) {
    
});

