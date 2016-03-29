//var http = require('http')
var port = process.env.PORT || 1337;
//http.createServer(function(req, res) {
//  res.writeHead(200, { 'Content-Type': 'text/plain' });
//  res.end('Hello Airbus Toulouse\n');
//}).listen(port);

var express = require('express');
var server = express();
//server.configure(function(){
  //server.use('/media', express.static(__dirname + '/media'));
  server.use(express.static(__dirname + '/'));
//});

server.listen(port);
console.log('Server listening on port ' + port);