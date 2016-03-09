var Food = require('../schema/food'); //need to require schema so we can reference it

module.exports = {

    postFood: function(req, res) {
        new Food(req.body).save(function(err, data) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(data);
            }
        })
    },

    getFood: function(req, res) {
        Food.find().then(function(response) {
            res.send(response);
        })
    }
}