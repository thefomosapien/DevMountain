var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json());

app.use(middleware.addHeaders);


app.get('/name/:name', mainCtrl.getName);

app.get('/location', mainCtrl.getLocation);

app.get('/occupations', mainCtrl.getOccupations);

app.get('/occupations/latest', mainCtrl.getLatestOccupation);

app.get('/hobbies', mainCtrl.getHobbies);

app.get('/hobbies/:type', mainCtrl.getHobbiesType);

app.get('/skills', mainCtrl.getSkills);


app.put('/name', mainCtrl.putName);

app.put('/location', mainCtrl.putLocation);


app.post('/hobbies', mainCtrl.postHobbie);

app.post('/occupations', mainCtrl.postOccupation);

app.post('/skills', middleware.generateId, mainCtrl.postSkills);



var port = 3000
app.listen(port, function () {
    console.log('listening to port ', port);
})