var express = require('express');
var bodyParser = require('body-parser');

var users = [];

var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res, next) {
    res.status(200).json({message: 'hello'});
});

app.post('/users', function(req, res, next) {
    users.push(req.body);
    res.status(200).json(users)
});

app.listen(3000, function () {
    console.log('listening on port 3000');
});