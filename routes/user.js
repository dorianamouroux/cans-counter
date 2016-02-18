var Router = require('express').Router(),
    UserModel = require('../models/user');

Router.get('/users', function(req, res) {
    UserModel.find({}, function(err, data) {
        if (err) {
            res.apiKo('Error database');
            console.log(err);
        } else {
            res.apiOk(data);
        }
    });
});

Router.post('/users', function(req, res) {
    console.log(req);
    if (req.body.name === undefined || req.body.name.length < 1)
        return (res.apiKo('A name is required'));

    var newUser = new UserModel({
        name: req.body.name
    });

    UserModel.findOne({
        name: req.body.name
    }, function(err, data) {
        if (err) {
            res.apiKo('Error database');
            console.log(err);
        } else if (data) {
            res.apiKo('User already exist');
        } else {
            newUser.save(function(err) {
                if (err) {
                    res.apiKo('Error database');
                    console.log(err);
                } else {
                    res.apiOk(newUser);
                }
            });
        }
    });
});

module.exports = Router;
