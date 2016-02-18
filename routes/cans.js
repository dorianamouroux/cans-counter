var Router = require('express').Router();

Router.get('/cans', function(req, res) {
    res.json({
        "bitch": "cans"
    })
});

module.exports = Router;
