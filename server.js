var express = require("express");
var routes = require('./routes/main');
var app = express();

// setup view engine
app.set('view engine', 'jade');

// setup router
app.use('/', routes);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});