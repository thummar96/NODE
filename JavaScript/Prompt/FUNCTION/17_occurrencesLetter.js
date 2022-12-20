/*

17. Write a JS function to  get the number of occurrences of each letter in specified string.

*/

/***  Named Function ***/


function Occurrences (String) {
    String = String.toLowerCase().split("").sort().join("");
        let result = [];
        for (let i of String) {
            let Arr = [];
            Arr = [...String.matchAll(i)];
            result.push(`${i} : ${Arr.length}`);
        }
        return result;
    }
    console.log(Occurrences('helloword')); 
    


/*** Anonymous Function ***/


// let Occurrences = (String) => {
//     String = String.toLowerCase().split("").sort().join("");
//         let result = [];
//         for (let i of String) {
//             let Arr = [];
//             Arr = [...String.matchAll(i)];
//             result.push(`${i} : ${Arr.length}`);
//         }
//         return result;
//     }
//     console.log(Occurrences('helloword')); 
    