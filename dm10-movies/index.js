var express = require('express');
var bodyParser = require('body-parser');

var moviesController = require('./controllers/movies_controller');

var moviesPolicies = require('./policies/movies_policies');

var logger = require('./middleware/logger');

var app = express();

app.use(bodyParser.json());
app.use(logger);

app.get('/movies', moviesController.index);
app.get('/movies/:id', moviesController.show);
app.post('/movies', moviesController.create);
app.put('/movies/:id', moviesController.update);
app.delete('/movies/:id', moviesPolicies.canDestroy, moviesController.destroy);

var port = 3000;
app.listen(port, function() {
  console.log('listening to port ', port);
});
