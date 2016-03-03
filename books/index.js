var express = require('express');
var bodyParser = require('body-parser');

var bookController = require('./controllers/bookController')

var app = express();


app.use(bodyParser.json());

app.get('/books', bookController.index);

app.get('/books/:idx', bookController.show);

app.put('/books/:idx', bookController.update);

app.post('/books', bookController.create);

app.delete('books/:idx', bookController.destroy);



var port = 3000
app.listen(port, function () {
    console.log('listening to port ', port);
})