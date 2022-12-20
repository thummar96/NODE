/*

25. Write a JS function that accept a list of country names as input and returns the longest country name as output. 
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"

*/


/***  Named Function ***/


// function longest_country () {
//     let largerLength = Array.length;
//     for (let i of Array) {
//         if (i.length > largerLength) {
//             largerLength = i.length;
//         }
//     }
//     return Array.filter(x => x.length == largerLength);
// }
// let Array = ["Australia", "Germany", "United States of America" ];
// console.log(longest_country(Array));


/*** Anonymous Function ***/


let  longest_country = () => {
    let largerLength = Array.length;
    for (let i of Array) {
        if (i.length > largerLength) {
            largerLength = i.length;
        }
    }
    return Array.filter(x => x.length == largerLength);
}
let Array = ["Australia", "Germany", "United States of America" ];
console.log(longest_country(Array));
