var express = require('express');
var bodyParser = require('body-parser');

var moviesController = require('./controllers/movies_controller');

var moviesPolicies = require('./policies/movies_policies');

var logger = require('./middleware/logger');
var idParser = require('./middleware/id_parser');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(logger);
app.use(idParser);

app.get('/');

app.get('/movies', moviesController.index);
app.get('/movies/:id', moviesController.show);
app.post('/movies', moviesController.create);
app.put('/movies/:id', moviesController.update);
app.delete('/movies/:id', moviesPolicies.canDestroy, moviesController.destroy);

var port = 3000;
app.listen(port, function() {
  console.log('listening to port ', port);
});
