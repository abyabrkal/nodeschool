/**************************
 Node.JS
 25.Apr.2017

 Core: Javascripting
 -- looping-through-arrays.js

 **************************/

 var pets = ['cat', 'dog', 'rat'];

for(var i = 0; i < pets.length; i++){
	pets[i] = pets[i] + 's';
}

 console.log(pets); 