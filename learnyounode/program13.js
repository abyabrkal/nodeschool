/**************************
 Node.JS
 10.May.2017

 Core: LearnYouNode
 -- program13.js


 ## HTTP JSON API SERVER (Exercise 13 of 13)

  Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.

**************************/

var http = require('http');
var url = require('url');



http.createServer((req, res) => {
    // REQUEST ERROR
    req.on('error', (err) => {
        console.error(err);
        res.statusCode = 400;
        res.end();
    });
    // RESPONSE ERROR
    res.on('error', (err) => {
        console.error(err);
    });

    var URL13 = url.parse(req.url, true);

    var isotime = URL13.query['iso'];
    var route = URL13.pathname;
    var time = new Date(isotime);

    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var unixtime = time.getTime();

    // THE REAL WORK
    if(req.method === 'GET') {

        // SET RESPONSE HEADER
        res.writeHead(200, {'Content-Type': 'application/json'});

        //ROUTE: ISO TIME
        if(route === '/api/parsetime'){

            //SET ISO RESPONSE BODY
            var iContent = {
                "hour": hour,
                "minute": minute,
                "second": second
            };
            console.log(JSON.stringify(iContent));
            res.write(JSON.stringify(iContent));

        //ROUTE: UNIX TIME
    } else if (route === '/api/unixtime') {

            //SET UNIX RESPONSE BODY
            var uContent = {
                "unixtime": unixtime
            };

            res.write(JSON.stringify(uContent));
            console.log(JSON.stringify(uContent));
        } else {
            console.log("De-Routed: " + req.url);
        }

        res.end();


    } else {
        res.statusCode = 404;
        res.end();
    }


}).listen(process.argv[2]);



 /************************************************
 Official Solution:
 *************************************************

 var http = require('http')
 var url = require('url')

 function parsetime (time) {
   return {
     hour: time.getHours(),
     minute: time.getMinutes(),
     second: time.getSeconds()
   }
 }

 function unixtime (time) {
   return { unixtime: time.getTime() }
 }

 var server = http.createServer(function (req, res) {
   var parsedUrl = url.parse(req.url, true)
   var time = new Date(parsedUrl.query.iso)
   var result

   if (/^\/api\/parsetime/.test(req.url)) {
     result = parsetime(time)
   } else if (/^\/api\/unixtime/.test(req.url)) {
     result = unixtime(time)
   }

   if (result) {
     res.writeHead(200, { 'Content-Type': 'application/json' })
     res.end(JSON.stringify(result))
   } else {
     res.writeHead(404)
     res.end()
   }
 })
 server.listen(Number(process.argv[2]))

 ************************************************/
