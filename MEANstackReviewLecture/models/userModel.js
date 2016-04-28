var mongoose = require("mongoose");
var cartSchema = require("./cartSchema.js");

var userSchema = new mongoose.Schema({
    
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    cart: cartSchema
    
});

module.exports = mongoose.model("User", userSchema);


//57223df5d2094a881958aa3a