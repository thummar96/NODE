/*

13. Write a JS function to compute the factors of a positive integer.

*/

// The factors of 42 are 1, 2, 3, 6, 7, 14, 21 and 42.


/***  Named Function ***/

function  factors (number){
    let result=[];
    for (i = 1; i <= number;i++){
    if (number % i == 0)
    {
        result.push(i);
    }
  }
  return result.length;
}
console.log(factors(42));             // 8


/*** Anonymous Function ***/

// let  factors = (number) =>
// {
//     let result=[];
//     for (i = 1; i <= number;i++){
//     if (number % i == 0)
//     {
//         result.push(i);
//     }
//   }
//   return result.length;
// }
// console.log(factors(42));
