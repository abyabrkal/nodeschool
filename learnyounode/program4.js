/**************************
 Node.JS
 26.Apr.2017

 Core: LearnYouNode
 -- program4.js

 MY FIRST ASYNC I/O! (Exercise 4 of 13)

  Write a program that uses a single asynchronous filesystem operation to
  read a file and print the number of newlines it contains to the console
  (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument.

 **************************/

var fs = require('fs');

function getNewLine(callback) {
  fs.readFile(process.argv[2], function doneReading(err, buffer) {
    var str = buffer.toString();
    var arr = str.split('\n');
    var count = arr.length - 1;
    callback(count);
  })
}

function logCount(myNumber) {
  console.log(myNumber)
}

getNewLine(logCount);


/************************************************
Official Solution:
*************************************************
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})

************************************************/
