var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var productCtrl = require("./controllers/productCtrl.js");
var userCtrl = require("./controllers/userCtrl.js");


var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));


//product
app.get('/api/products', productCtrl.Read);
app.post('/api/products', productCtrl.Create);
app.put('/api/products/:id', productCtrl.Update);
app.delete('/api/products/:id', productCtrl.Delete);


//user
app.get('/api/user', userCtrl.Read);
app.post('/api/user', userCtrl.Create);
app.put('/api/user/:id', userCtrl.Update);
app.delete('/api/user/:id', userCtrl.Delete);
app.post('/api/user/addtocart/:id', userCtrl.AddProductToCart);
app.put('/api/user/removefromcart/:id', userCtrl.RemoveProductFromCart);
app.post('/api/user/login', userCtrl.Login);
app.get('/api/user/:id', userCtrl.ReadId);









mongoose.connect('mongodb://localhost/funstuff');
mongoose.connection.once('open', function(){
    console.log('Connected to mongodb\n');
});


app.listen(3141, function(){
    console.log("Party time on port 3141");
})
