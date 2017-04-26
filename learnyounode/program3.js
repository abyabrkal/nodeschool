/**************************
 Node.JS
 26.Apr.2017

 Core: LearnYouNode
 -- program3.js

 ## MY FIRST I/O! (Exercise 3 of 13)

  Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file.
 **************************/

var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();

var arr = str.split('\n');
var count = arr.length - 1;

console.log(count);
