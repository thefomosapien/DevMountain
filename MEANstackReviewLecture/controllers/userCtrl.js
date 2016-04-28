var User = require("../models/userModel.js");

module.exports = {

    Create: function(req, res, next){
        var newUser = new User(req.body);
        newUser.save(function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },

    //using a populate to see the products information in the users cart
    Read: function(req, res, next){
        User.find()
            .populate({path: 'cart.products.product'})
            .exec(function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },

    //using a populate to see the products information in the users cart
    ReadId: function(req, res, next){
        User.findById(req.params.id).populate({path: 'cart.products.product'}).exec(function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },

    Update: function(req, res, next){
        User.findByIdAndUpdate(req.params.id, req.body, function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },

    Delete: function(req, res, next){
        User.findByIdAndRemove(req.params.id, function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                res.status(200).json(response);
            }
        })
    },

    //first we have to find the user by their id, then we add the product id and qty given to us through the req.body and add that on the the users current cart. then we update the users information with the updated cart.
    AddProductToCart: function(req, res, next){
        User.findById(req.params.id, function(err1, response1){
            var cart = response1.cart;

            var test = false;
            for(var i = 0; i < cart.products.length; i++){

              if(cart.products[i].product.toString() === req.body.id){
                test = true;
                cart.products[i].qty += req.body.qty;
              }
            }
            if(!test){
              cart.products.push({product: req.body.id, qty: req.body.qty});
            }
            User.findByIdAndUpdate(req.params.id, {cart: cart}, function(err2, response2){
            if(err2){
                res.status(500).json(err2);
            }else{
                res.status(200).json(response2);
            }
        })
        })
    },

    //first we find the user by their id, then we loop through their cart until we find the matching id of the one we want to remove, we splice it out (cart.products is an array) and update the users cart with the new array.
    RemoveProductFromCart: function(req, res, next){
        User.findById(req.params.id, function(err1, response1){
            var cart = response1.cart;
            for(var i = 0; i < cart.products.length; i++){ if(cart.products[i].product.toString() === req.body.id){
                    cart.products.splice(i, 1);
                }
            }
            User.findByIdAndUpdate(req.params.id, {cart: cart}, function(err2, response2){
            if(err2){
                res.status(500).json(err2);
            }else{
                res.status(200).json(response2);
            }
        })
    })
    },

    //mongoose attempts to find a user object that has the same username and password as what was passed in with the req.body, if a user is found we send back true and the user object, if no user is found we send back false
    Login: function(req, res, next){
        User.findOne(req.body, function(err, response){
            if(err){
                res.status(500).json(err);
            }else{
                if(response){
                    res.status(200).json({login: true, user: response});
                }else{
                    res.status(200).json({login: false});
                }

            }
        })
    }

    

}
