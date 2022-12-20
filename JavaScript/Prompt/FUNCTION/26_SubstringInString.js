/*

26. Write a JS function to find a substring in a given a string without repeating characters. 

*/

/***  Named Function ***/

function substring (String) {
    let result = "";
    for (let i of String) {
        if (result.match(i) != i) {
            result += i;
        }
    }
    return result;
}
let str = "Kinjal Thummar"
console.log(`Input : ${str}`);
console.log(`Output : ${substring(str)}`); 


/*** Anonymous Function ***/

// let substring = (String) => {
//     let result = "";
//     for (let i of String) {
//         if (result.match(i) != i) {
//             result += i;
//         }
//     }
//     return result;
// }
// let str = "Kinjal Thummar"
// console.log(`Input : ${str}`);
// console.log(`Output : ${substring(str)}`); 
