module.exports = function() {
    return (function(req, res, next) {
        res.apiOk = function(data) {
            res.json({
                status: 'ok',
                data: data
            });
        };
        res.apiKo = function(data) {
            res.json({
                status: 'ko',
                data: data
            });
        };
        next();
    });
};
