/**************************
 Node.JS
 09.May.2017

 Core: LearnYouNode
 -- timeserver11.js


 ## HTTP FILE SERVER (Exercise 11 of 13)

  Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.

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
 var net = require('net')

 function zeroFill (i) {
   return (i < 10 ? '0' : '') + i
 }

 function now () {
   var d = new Date()
   return d.getFullYear() + '-' +
     zeroFill(d.getMonth() + 1) + '-' +
     zeroFill(d.getDate()) + ' ' +
     zeroFill(d.getHours()) + ':' +
     zeroFill(d.getMinutes())
 }

 var server = net.createServer(function (socket) {
   socket.end(now() + '\n')
 })

 server.listen(Number(process.argv[2]))


 ************************************************/
