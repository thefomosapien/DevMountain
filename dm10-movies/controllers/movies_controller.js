var movies = require('../models/movies');

module.exports = {
  index: function(req, res, next) {
    var stars = parseInt(req.query.stars);
    if (stars) {
      var result = movies.filter(function(movie){
        return movie.stars === stars;
      });
      res.status(200).json(result);
    }
    else {
      res.status(200).json(movies);
    }
  },

  show: function(req, res, next) {
    var id = parseInt(req.params.id);
    res.status(200).json(movies[id]);
  },

  create: function(req, res, next) {
    movies.push(req.body);
    res.status(200).json(movies);
  },

  update: function(req, res, next) {
    var index = parseInt(req.params.id);
    movies[index] = req.body;
    res.status(200).json(movies[index]);
  },

  destroy: function(req, res, next) {
    var index = parseInt(req.params.id);
    movies.splice(index, 1);
    res.sendStatus(204);
  }
};
