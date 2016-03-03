var books = require('../models/Book');

module.exports = {
    create: function (req, res, next) {
        books.push(req.body);
        res.status(200).json(books[books.length - 1]);
    },

    index: function (req, res, next) {
        res.status(200).json(books);
    },

    show: function (req, res, next) {
        var idx = parseInt(req.params.idx);
        res.status(200).json(books[idx]);

    },

    update: function (req, res, next) {
        var idx = parseInt(req.params.idx);
        books[idx] = req.body;
        res.status(200).json(books[idx]);
    },

    destroy: function (req, res, next) {
        var idx = parseInt(req.params.idx);
        books.splice(idx, 1);
        res.status(204).send();
    }
};