var express = require('express');
var app = express();
var path = require('path');

var PORT = process.env.PORT || 8080;

// Parse Request body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Routes
// =============================================================

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
    console.log('App listening on port: ' + PORT);
})