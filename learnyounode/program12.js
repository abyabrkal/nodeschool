/**************************
 Node.JS
 09.May.2017

 Core: LearnYouNode
 -- program12.js


 ## HTTP UPPERCASERER (Exercise 12 of 13)

  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.

**************************/

var http = require('http');
var fs = require('fs');


var server = http.createServer((req, res) => {

    var src = fs.createReadStream(process.argv[3]);

    src.pipe(res);


});


server.listen(process.argv[2]);





 /************************************************
 Official Solution:
 *************************************************
 var http = require('http')
 var fs = require('fs')

 var server = http.createServer(function (req, res) {
   res.writeHead(200, { 'content-type': 'text/plain' })

   fs.createReadStream(process.argv[3]).pipe(res)
 })

 server.listen(Number(process.argv[2]))

 ************************************************/
