module.exports = {
  canDestroy: function(req, res, next) {
    if (req.query.pin === '1234') {
      next();
    }
    else {
      next('not authorized');
    }
  }
};
