var Router = require('express').Router(),
    UserModel = require('../models/user');

Router.post('/cans/:user_id', function(req, res) {
    UserModel.findOne({
        _id: req.params.user_id
    }, function(err, data) {
        if (err) {
            console.error(err);
            res.apiKo('Error database');
        } else {
            var newEvent = {};
            data.update({
                $push: {
                    "cans": {}
                }
            }, function(err) {
                if (err) {
                    console.error(err);
                    res.apiKo('Error database');
                } else {
                    res.apiOk();
                }
            });
        }
    });
});

module.exports = Router;
