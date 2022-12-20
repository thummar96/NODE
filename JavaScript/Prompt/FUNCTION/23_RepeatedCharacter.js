/*

23. Write a JS function to find the first not repeated character. 
Sample arguments : 'abacddbec'
Expected output : 'e'

*/

/***  Named Function ***/


// function FirstRepeatedNot (string) {
//     let temp = [];
//     for(let i of string){
//         temp = [...string.matchAll(i)];
//         if (1 == temp.length) {
//             return i;
//         }
//     }
// }
// console.log(FirstRepeatedNot('rdydyurd'));

/*** Anonymous Function ***/


let  FirstRepeatedNot = (string) => {
    let temp = [];
    for(let i of string){
        temp = [...string.matchAll(i)];
        if (1 == temp.length) {
            return i;
        }
    }
}
console.log(FirstRepeatedNot('rdydyurd'));