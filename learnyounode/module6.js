/**************************
 Node.JS
 29.Apr.2017

 Core: LearnYouNode
 -- module6.js
  GENERAL MODULE FILE WHICH WILL BE EXPORTED and
  made available for other programs for use
  This module takes in path, filter and callback function from
  any program (calling this module)


 ## MAKE IT MODULAR (Exercise 6 of 13)

  This problem is the same as the previous but introduces the concept of
  modules. You will need to create two files to solve this.

  Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. The first argument is the
  directory name and the second argument is the extension filter. Print the
  list of files (one file per line) to the console. You must use
  asynchronous I/O.

  These four things are the contract that your module must follow.

  1. Export a single function that takes exactly the arguments described.
  2. Call the callback exactly once with an error or some data as described.
  3. Don't change anything else, like global variables or stdout.
  4. Handle all the errors that may occur and pass them to the callback.

 **************************/
var fs = require('fs');


module.exports = function(path, filter, callback) {

    //console.log(path + '**' + filter + '**');

    fs.readdir(path, function doneReading(err, list) {

        if (err) {
            return callback(err);
        } else {

            var ext = '.' + filter;

            var newList = list.filter(function(fname){
                    return (fname.endsWith(ext) === true);
            });

            callback(null, newList);
        }
    })
}



/****************************************
           Official Solution
***************************************
//module.js

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}

*******************************************/
