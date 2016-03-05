var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var cors = require('cors');
var session = require('express-session');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/userCtrl.js')
var config = require('/config.js');


var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'));


app.post('/api/login', userCtrl.login);


app.get('/api/profiles', profileCtrl.friendFinder);





var corsOptions = {
    origin: 'http://localhost:3000'
};

var port = 3000
app.listen(port, function () {
    console.log('listening to port ', port);
})

