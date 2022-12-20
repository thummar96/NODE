/*

19. Write a JS function that returns array elements larger than a number.

*/

/***  Named Function ***/

// function larger (number) {
//     return Arr.filter(x => x > number)
// }
// let Arr = [];
// for (let i = 0; i < 10; i++) {
//     Arr.push(Math.floor(Math.random() * 10))
// }
// console.log(larger(3));



/*** Anonymous Function ***/

 

let larger = (number) => {
    return Arr.filter(x => x > number)
}
let Arr = [];
for (let i = 0; i < 10; i++) {
    Arr.push(Math.floor(Math.random() * 10))
}
console.log(larger(3));