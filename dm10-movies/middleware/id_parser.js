module.exports = function (req, res, next) {
    if (req.params.id) {
        req.params.id = parseInt(req.params.id);
    }
    next{};
};