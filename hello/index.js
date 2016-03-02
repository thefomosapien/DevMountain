var express = require('express');
var bodyParser = require('body-parser')

var users = [{
    name: 'Jerry Seinfeld',
    city: 'New York',
    occupation: 'Comedian'
}, {
    name: 'Newman',
    city: 'New York',
    occupation: 'Little'
}]

var app = express();
app.use(bodyParser.json());

app.get('/users', function (req, res, next) {
    res.status(200).json(users)
})

app.post('/users', function (req, res, next) {
    users.push(req.body);
    res.status(200).json(users[users.length - 1]);
});

app.delete('/users', function (req, res, next) {
    var deletedUsers = users.pop();
    res.status(200).json(deletedUser);
})

app.listen(3000, function () {
    console.log('listening on port 3000')
});