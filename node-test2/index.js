var express = require('express');
var bodyParser = require('body-parser');

var books = [];

var app = express();

app.use(bodyParser.json());

app.get('/books', function(req, res, next) {
    res.status(200).json(books);
});

app.post('/books', function(req, res, next) {
    books.push(req.body);
    res.status(200).json(books);
});

app.delete('/books/:id', function(req, res, next) {
    var id = parseInt(req.params.id);
    books.splice(id, 1);
    res.status(200).send(books);
});

var port = 3000;
app.listen(port, function() {
    console.log('listening on port', port);
});