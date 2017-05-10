/**************************
 Node.JS
 10.May.2017

 Core: Stream Adventure
 -- lesson2.js

 ## MEET PIPE (Exercise 2 of 15)

 **************************/

var fs = require('fs');

fs.createReadStream(process.argv[2]).pipe(process.stdout);




/************************************************
Official Solution:
*************************************************

************************************************/
