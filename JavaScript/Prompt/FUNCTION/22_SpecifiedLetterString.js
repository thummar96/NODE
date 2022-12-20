/*

22. Write a JS function that accepts two arguments, a string and a letter and the function will count the number of occurrences of 
the specified letter within the string. 

*/

/***  Named Function ***/


// function CountNumber(String,char){
//     let array = [...String.matchAll(char)]
//     return array.length;
//     // return array;
// }
// console.log(CountNumber("Russion" , 's'));




/*** Anonymous Function ***/


let  CountNumber = (String,char) => {
    let array = [...String.matchAll(char)]
    // return array.length;
    return array;
}
console.log(CountNumber("Russion" , 's'));


