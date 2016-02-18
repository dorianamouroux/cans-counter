var app = require("express")();

require('mongoose').connect('mongodb://localhost/cans-counter');

// some middleware
app.use(require('morgan')('dev')); // log
app.use(require('body-parser').urlencoded({
    extended: false
})); // POST params
app.use(require('body-parser').json()); // POST params

app.use(require('./api-helper')()); // api OK & api KO

require('./init/router')(app); // routes
require('./init/error')(app); // errors handler

require('./init/launcher')(app); // launch http
