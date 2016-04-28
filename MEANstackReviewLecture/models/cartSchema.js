var mongoose = require("mongoose");

var cartSchema = new mongoose.Schema({
    
    products: [
        {
            product: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
            qty: {type: Number, required: true, min: 1}
        }
    ]
    
});

module.exports = cartSchema;

//exporting cart schema and not model
//we don't want to make a entirely new collection of data for something that is going to only be in
//a users data object.
