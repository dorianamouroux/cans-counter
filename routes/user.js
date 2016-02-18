var Router = require('express').Router(),
    UserModel = require('../models/user');

Router.get('/user', function(req, res) {
    UserModel.find({}, function(err, data) {
        if (err) {
            res.apiKo('Error database');
            console.log(err);
        } else {
            res.apiOk(data);
        }
    });
});

Router.get('/user/:user_id', function(req, res) {
    UserModel.findOne({
        _id: req.params.user_id
    }, function(err, data) {
        if (err) {
            console.error(err);
            res.apiKo('Error database');
        } else {
            res.apiOk(data);
        }
    });
});

Router.post('/user', function(req, res) {
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
