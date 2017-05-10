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
//var map = require('through2-map');


http.createServer((req, res) => {
    req.on('error', (err) => {
        console.error(err);
        res.statusCode = 400;
        res.end();
    });
    res.on('error', (err) => {
        console.error(err);
    });

    var pData = [];
    if(req.method === 'POST'){
        req.on('data', (chunk) => {
            pData.push(chunk);
        }).on('end', () => {
            pData = Buffer.concat(pData).toString().toUpperCase();
            res.end(pData);
        });

    } else {
        console.log("Not a POST");
    }


}).listen(process.argv[2]);



 /************************************************
 Official Solution:
 *************************************************

     var http = require('http')
     var map = require('through2-map')

     var server = http.createServer(function (req, res) {
       if (req.method !== 'POST') {
         return res.end('send me a POST\n')
       }

       req.pipe(map(function (chunk) {
         return chunk.toString().toUpperCase()
       })).pipe(res)
     })

     server.listen(Number(process.argv[2]))

 ************************************************/
