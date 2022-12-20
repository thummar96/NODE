/*

7. Write a JS function that accepts a string as a parameter and counts the number of  vowels within the string.

*/


/***  Named Function ***/

function CountVowel (string){
    let regex = (/[aeiou]/ig);
    let array = string.match(regex);
    return array;
}
console.log(CountVowel('kinjal Thummar'));


/*** Anonymous Function ***/


// let CountVowel = (string) =>{
//     let regex = (/[aeiou]/ig);
//     let array = string.match(regex);
//     return array;
// }
// console.log(CountVowel('kinjal Thummar'));