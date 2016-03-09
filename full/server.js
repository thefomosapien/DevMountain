var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    app = express(),
    foodCtrl = require('./controllers/foodCtrl'),
    port = 8090,
    mongoUri = 'mongodb://localhost:27017/menu';
    
app.use(cors());
app.use(bodyParser.json()); //creating req.body
app.use(express.static(__dirname + '/public')); //connecting to the front-end

app.get('/api/food', foodCtrl.getFood);
app.post('/api/food', foodCtrl.postFood) //posts to database
    
app.listen(port, function() {
    console.log('listening on port ' + port);
})

//connecting to mongo - connection.once is like a listener waiting for mongoose to open then runs the console.log
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('connected to mongoD at ' + mongoUri);
})