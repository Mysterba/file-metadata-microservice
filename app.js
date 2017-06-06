var express = require('express');
var path = require('path');
var handlebars  = require('express-handlebars'), hbs;

var app = express();

app.set('port', process.env.PORT || 8080);

// send app to router
require('./router')(app);

/* express-handlebars - https://github.com/ericf/express-handlebars
A Handlebars view engine for Express. */
hbs = handlebars.create({
   defaultLayout: 'Main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'static')));

app.listen('port', function () {
    console.log("App is up");
});