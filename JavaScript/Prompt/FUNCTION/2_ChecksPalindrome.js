/*  2. Write a JS function that checks whether a passed string is palindrome or not?  */

// const prompt = require("prompt-sync")();

/***  Named Function ***/

// function check_palindrome(str)
// {
//     let i;
//     let len = str.length;
//     for(i=0; i<len/2; i++){

//         if (str[i] != str[len-1-i ]) {
//             return ' THIS STRING IS NOT A PALINDROME';
//         }
//     }
//     return "THIS STRING IS A PALINDROME";
    
// }
// let str=prompt("ENTER A STRING  : ");

// console.log( check_palindrome(str));
// console.log(typeof check_palindrome);



/*** Anonymous Function ***/

// let check_palindrome=(str)=>{
//     let i;
//     let len = str.length;
//     for(i=0; i<len/2; i++){

//         if (str[i] != str[len-1-i ]) {
//             return ' THIS STRING IS NOT A PALINDROME';
//         }
//     }
//     return "THIS STRING IS A PALINDROME";
// }
// let str=prompt("ENTER A STRING  : ");
// console.log(check_palindrome(str));


let CheckPalindrom = (str) => {
    return str == str.split('').reverse().join('');
}
    let str = "madam";
    let str1 = "nursesrun";
    // let str2 = "Vrushabh";
    CheckPalindrom(str) ? console.log(`${str} is palindrome`) : console.log(`${str} is not palindrome`);
    CheckPalindrom(str1) ? console.log(`${str1} is palindrome`) : console.log(`${str1} is not palindrome`);
    // CheckPalindrom(str2) ? console.log(`${str2} is palindrome`) : console.log(`${str2} is not palindrome`);
