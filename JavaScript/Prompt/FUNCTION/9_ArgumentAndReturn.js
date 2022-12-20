/*

9. Write a JS function which accepts an argument and returns the type.

*/

/***  Named Function ***/

function TypeArg  (Arg){
    return typeof Arg
}
console.log(TypeArg('kinjal'));             // string
console.log(TypeArg(123))                   // number
console.log(typeof true);                   // boolean

/*** Anonymous Function ***/

// let TypeArg = (Arg) =>{
//     return typeof Arg
// }
// console.log(TypeArg('kinjal'));             // string
// console.log(TypeArg(123))                   // number
// console.log(typeof true);                   // boolean