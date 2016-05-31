//
// # Trading book server
var http = require('http');
var path = require('path');

var async = require('async');

var logger = require('morgan');

var express = require('express');

var app = express();
var server = http.createServer(app);

app.use(logger('dev'));
console.log(__dirname);
app.use(path.join('/node_modules/'), express.static(path.join(__dirname, '/book-trading/', '../node_modules/')));
app.use('/client/', express.static(path.join(__dirname, '/book-trading/', '../client/')));
app.use('/systemjs.config.js', express.static(path.join(__dirname, '/book-trading/', '../systemjs.config.js')));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/book-trading', '../index.html'));
});



server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
