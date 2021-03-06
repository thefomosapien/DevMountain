var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongojs = require("mongojs");

var app = express();
app.use(bodyParser.json());

var nodePort = 3000;


var db = mongojs("bird-sightings");
var collection = db.collection("sightings");

app.post('/api/sighting', function (req, res) {
    console.log(req.body);
    collection.insert(req.body, function (err, r) {
        console.log(r);
        return res.status(200).send(r);
    })

});

app.get('/api/sighting', function (req, res) {
    collection.find({ name: req.query.name }, function (err, sighting) {
        return res.status(200).send(sighting);
    })
});

app.put('/api/sighting?id=09evasd09jhahs9d8h9vh', function (req, res) {
    console.log('put')
    return res.status(200).send('Something');
});

app.delete('/api/sighting?id=09evasd09jhahs9d8h9vh', function (req, res) {
    console.log('delete')
    return res.status(200).send('Something');
});


app.listen(nodePort, function () {
    console.log('listening on port ' + nodePort);
});