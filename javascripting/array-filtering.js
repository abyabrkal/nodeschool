/**************************
 Node.JS
 25.Apr.2017

 Core: Javascripting
 -- array-filtering.js

 **************************/

 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 var filtered = numbers.filter(function(number){
 	return number % 2 === 0;
 });

 console.log(filtered);