var app = require("express")();

require('mongoose').connect('mongodb://localhost/cans-counter');

// some middleware
app.use(require('morgan')('dev')); // log
app.use(require('body-parser').urlencoded({
    extended: false
})); // POST params
app.use(require('body-parser').json()); // POST params

app.use(require('./api-helper')()); // api OK & api KO

require('./router')(app); // routes
require('./error')(app); // errors handler

require('./launcher')(app); // launch http
