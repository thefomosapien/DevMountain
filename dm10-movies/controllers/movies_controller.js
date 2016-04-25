var movies = require('../models/movies');

// // localhost:3000/movies ? stars = 5 & order = asc
// // req.query = {
//   stars: '5',
//   order: 'asc'
// }

var sortNameAsc = function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

module.exports = {
  index: function (req, res, next) {

    var stars = parseInt(req.query.stars);
    if (stars) {
      result = result.filter(function (movie) {
        return movies.stars === stars;
      })
    }


    var order = req.query.order || 'asc';

    var result = movies;


    if (order === 'asc') {
      var result = result.sort(sortNameAsc);
    }
    else if (order === 'dsc') {
      result = result.sort(sortNameAsc).revers();
    }
    res.status(200).json(result);
  },

  show: function (req, res, next) {
    var id = req.params.id;
    res.status(200).json(movies[id]);
  },

  create: function (req, res, next) {
    movies.push(req.body);
    res.status(200).json(movies);
  },

  update: function (req, res, next) {
    var index = req.params.id;
    movies[index] = req.body;
    res.status(200).json(movies[index]);
  },

  destroy: function (req, res, next) {
    var index = req.params.id;
    movies.splice(index, 1);
    res.sendStatus(204);
  }
};
