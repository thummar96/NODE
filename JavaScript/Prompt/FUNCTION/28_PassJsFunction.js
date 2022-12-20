/*

28. Write a JS program to pass a 'JS function' as parameter. 

*/

/***  Named Function ***/

function parameter (n1,n2) {
        return n1 + n2;
}
function total (number1,number2,callback) {
    return callback(number1,number2);
}
console.log(total(10,10,parameter));


/*** Anonymous Function ***/


// let sum = (n1, n2) => {
//     return n1 + n2;
// }
// let total = (number1, number2, callback) => {
//     return callback(number1, number2);
// }
// console.log(total(10, 20, sum)); 