/**************************
 Node.JS
 01.May.2017

 Core: LearnYouNode
 -- program7.js


 ## HTTP CLIENT (Exercise 7 of 13)

  Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each
  "data" event from the response to a new line on the console (stdout).
  For this exercise you will need to use the http core module.

  Official Solution:
  var http = require('http')

   http.get(process.argv[2], function (response) {
     response.setEncoding('utf8')
     response.on('data', console.log)
     response.on('error', console.error)
   }).on('error', console.error)

 **************************/

 var http = require('http');

 function getURLResponse(url, callback){

     http.get(url, function(res){
         res.setEncoding('utf8');

         res.on('error', function(e){
             //console.log("Request Error: " + e.message);
             callback(err);
         });

         res.on('data', function(data){
             //console.log(data);
             callback(data);
         });
     });
 }

 function log(response) {
   console.log(response);
 }

 getURLResponse(process.argv[2], log);
