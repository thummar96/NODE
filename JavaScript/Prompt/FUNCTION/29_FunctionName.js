/*

29. Write a JS function to get the function name. 

*/

/***  Named Function ***/


/*** Anonymous Function ***/

const func1 = function() {};

const object = {
  func2: function() {}
};
console.log(func1.name);
console.log(object.func2.name);
