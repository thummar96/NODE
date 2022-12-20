/* 11. Write a python function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. */

/***  Named Function ***/

function second_largest (Arr){
    Arr.sort();
    return `Second Lowest ${Arr[1]} And Second Greatest ${Arr[Arr.length - 2]} `;
}
let Arr = [11,23,45,78,34,90];
console.log(second_largest(Arr));    


/*** Anonymous Function ***/

// let second_largest = (Arr) =>{
//     Arr.sort();
//     return `Second Lowest ${Arr[1]} And Second Greatest ${Arr[Arr.length - 2]} `;
// }
// let Arr = [11,23,45,78,34,90];
// console.log(second_largest(Arr));                       // Second Lowest 23 And Second Greatest 78 