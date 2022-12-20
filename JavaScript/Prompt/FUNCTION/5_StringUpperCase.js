/* Write a iS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */


/*** Named Function ***/


// function FirstLetterCapital(string) {
//         let Arr = string.split('');
//         for (i = 0; i < Arr.length; i++) {
//             if (i == 0 || Arr[i - 1] == " ") {
//                 Arr[i] = Arr[i].toUpperCase();
//             }
//         }
//         return Arr.join('');
//     }
//     console.log(FirstLetterCapital("the quick brown fox.")); 


    function  FirstLetterCapital (string) {
            let Arr = string.split('');
            for (let i in Arr) {
                if (i == 0 || Arr[i - 1] == " ") {
                    Arr[i] = Arr[i].toUpperCase();
                }
            }
            return Arr.join('');
        }
    console.log(FirstLetterCapital("the quick brown fox."));



/*** Anonymous Function ***/


// FirstLetterCapital = (string) => {
//     let Arr = string.split('');
//     for (let i in Arr) {
//         if (i == 0 || Arr[i - 1] == " ") {
//             Arr[i] = Arr[i].toUpperCase();
//         }
//     }
//     return Arr.join('');
// }
// console.log(FirstLetterCapital("the quick brown fox."));


// let  FirstLetterCapital = (string) => {
//     let Arr = string.split('');
//     for (i = 0; i < Arr.length; i++) {
//         if (i == 0 || Arr[i - 1] == " ") {
//             Arr[i] = Arr[i].toUpperCase();
//         }
//     }
//     return Arr.join('');
// }
// console.log(FirstLetterCapital("the quick brown fox.")); 
