let arr=[11,12,13,14,15];

console.log(arr);
function firstinsert()
{
    arr.unshift(16);
    console.log(arr);
}
function firstdelete()
{
    arr.shift();
    console.log(arr);
}
function lastinsert()
{
    arr.push(16);
    console.log(arr);
}
function lastdelete()
{
    arr.pop();
    console.log(arr);
}
firstinsert();
firstdelete();
lastinsert();
lastdelete();


/*    output    */

/*      [ 11, 12, 13, 14, 15 ]
        [ 16, 11, 12, 13, 14, 15 ]
        [ 11, 12, 13, 14, 15 ]
        [ 11, 12, 13, 14, 15, 16 ]
        [ 11, 12, 13, 14, 15 ]
        [ 15, 25, 35, 45, 55, 65 ]       */



// let Arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// function FirstInsert(n) {
//     Arr.unshift(n);
//     console.log(Arr);
// }

// function FirstDelete() {
//     Arr.shift();
//     console.log(Arr);
// }

// function LastInsert(k) {
//     Arr.push(k);
//     console.log(Arr);
// }

// function LastDelete() {
//     Arr.pop();
//     console.log(Arr);
// }

// const prompt = require("prompt-sync")();

// console.log("...Welcome to stack...");
// console.log("1. First Insert in array.");
// console.log("2. Last Insert in array.");
// console.log("3. First Delete in array.");
// console.log("4. Last Delete in array.");

// let Choise = parseInt(prompt("Enter a choise : "));

// switch (Choise) {

//     case 1:
//         let FI = parseInt(prompt("Enter a First Insert value : "));
//         FirstInsert(FI);
//         break;

//     case 2:
//         let LI = parseInt(prompt("Enter a Last Insert value : "));
//         LastInsert(LI);
//         break;

//     case 3:
//         FirstDelete();
//         break;

//     case 4:
//         LastDelete();
//         break;

// }



let array=[15,25,35,45,55,65];

console.log(array);
function firstInsert(n)
{
    array.unshift(n);
    console.log(array);
}
function firstDelete()
{
    array.shift();
    console.log(array);
}
function lastInsert(k)
{
    array.push(k);
    console.log(array);
}
function lastDelete()
{
    array.pop();
    console.log(array);
}
const prompt = require("prompt-sync")();

let FI = parseInt(prompt("Enter a First Insert value : "));
console.log("First Insert :- ");
firstInsert(FI);

console.log("Last Delete :-");
lastDelete();

let LI = parseInt(prompt("Enter a Last Insert value : "));
console.log("last Insert :- ");
lastInsert(LI);

console.log("First Delete :- ");
firstDelete();
