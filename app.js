var express = require("express");

var app = express();

// some middleware
app.use(require('morgan')('dev')); // log
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({
    extended: false
}));

require('./router')(app);
require('./error')(app);

require('./launcher')(app);
