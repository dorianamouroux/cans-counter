function error404(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}

function error(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        status: err.status
    });
}

module.exports = function(app) {
    app.use(error404);
    app.use(error);
};
