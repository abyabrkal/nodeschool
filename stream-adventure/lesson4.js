/**************************
 Node.JS
 10.May.2017

 Core: Stream Adventure
 -- lesson4.js

 ## TRANSFORM (Exercise 4 of 15)
 Convert data from `process.stdin` to upper-case data on `process.stdout`
using the `through2` module.

 **************************/

var map = require('through2');


process.stdin.pipe(map((chunk) => {
    console.log(chunk.toString().toUpperCase());
    return (chunk.toString().toUpperCase());
})).pipe(process.stdout);





/************************************************
Official Solution:
*************************************************

************************************************/
