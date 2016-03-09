var mongoose = require('mongoose'),
    Schema = mongoose.Schema; //initializing schema - a blueprint for your data//
    
var Food = Schema({
    name: {type: String, required: true},
    smell: String,
    reviews: [{
        reviewer: {type: String, required: true},
        review: {type: String, rquired: true},
        date: {type: Date, default: new Date()}
    }]
})

module.export = mongoose.model('food', Food);