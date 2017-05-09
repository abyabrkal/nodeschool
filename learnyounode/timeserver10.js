/**************************
 Node.JS
 09.May.2017

 Core: LearnYouNode
 -- timeserver10.js


  ## TIME SERVER (Exercise 10 of 13)

   Write a TCP time server!

   Your server should listen to TCP connections on the port provided by the
   first argument to your program. For each connection you must write the
   current date & 24 hour time in the format:

      "YYYY-MM-DD hh:mm"

   followed by a newline character. Month, day, hour and minute must be
   zero-filled to 2 integers. For example:

      "2013-07-06 17:42"

   After sending the string, close the connection.

**************************/
var net = require('net');



module.exports = function(port) {

    var time = function(){
        var date = new Date();

        var year =  date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();

        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;

        var tstr = year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n";

        return tstr;
    }

    var server = net.createServer((socket) => {
        socket.write(time());
        socket.end();

    });


    server.listen(port);
}





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
