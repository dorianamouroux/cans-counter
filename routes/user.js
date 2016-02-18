var Router = require('express').Router();

Router.get('/users', function(req, res) {
    res.json({
        "bitch": "user"
    })
});

module.exports = Router;
