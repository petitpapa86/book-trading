//
// # Trading book server
var http = require('http');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var wagner = require('wagner-core');
var db = require('./db');
var bodyParser = require('body-parser');

var app = express();
var server = http.createServer(app);

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/node_modules/', express.static(path.join(__dirname, '/node_modules/')));
app.use('/client/', express.static(path.join(__dirname, '/client/')));
app.use('/systemjs.config.js', express.static(path.join(__dirname, '/systemjs.config.js')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

db.init(function(err) {
    if (err) {
        console.error("FATAL ERROR AT START");
        console.error(err.toString());
        process.exit(-1);
    };
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Book Trading server listening at", addr.address + ":" + addr.port);
});
require('./server/models/models')(wagner);

app.use('/category/', require('./server/routes/categoryApi')(wagner));
