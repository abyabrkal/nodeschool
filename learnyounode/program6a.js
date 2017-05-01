/**************************
 Node.JS
 27.Apr.2017

 Core: LearnYouNode
 -- program6a.js

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

var mod6 = require('./module6.js');


function log(err, data) {
    if (err === null){
        console.log("Error");
    } else {
        for (item in data){
            console.log(data[item]);
        }
    }
}

mod6(process.argv[2], process.argv[3], log);
