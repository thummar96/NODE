/*

14. Write a JS function to convert an amount to coins. 
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1.

*/

/***  Named Function ***/

function AmmounttoCoins (Number) {
    let array=[];
    let coinstype = [25, 10, 5, 2, 1];
    let count = 0;
    for (let i of coinstype) {
        if (Number >= i) {
            count = parseInt(Number / i);
            Number = parseInt(Number % i);
            array.push(`${i} : ${count}`);
        }
        // console.log(array);
    }
    return array;
}
console.log(AmmounttoCoins(4));


/*** Anonymous Function ***/


// let AmmounttoCoins = (Number) => {
//     let array=[];
//     let coinstype = [25, 10, 5, 2, 1];
//     let count = 0;
//     for (let i of coinstype) {
//         if (Number >= i) {
//             count = parseInt(Number / i);
//             Number = parseInt(Number % i);
//             array.push(`${i} : ${count}`);
//         }
//         // console.log(array);
//     }
//     return array;
// }
// console.log(AmmounttoCoins(46));


