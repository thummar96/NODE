/*

6. Write a JS function that accepts a string as a parameter and find the longest word within the string. 
Example string : 'Web Development Tutorial'
Expected Output : 'Development'

*/

/***  Named Function ***/

function  longest_word (str) {
  let arr = str.split(' ');
  let  result = arr[1].length;
  for(let i=0;i<arr.length;i++){
    if(i.length > result){
      result = arr[1];
    }
    return arr.filter(x => x.length == result);
  }
}
console.log(longest_word("Web Development Tutorial"));


/*** Anonymous Function ***/


// let  longest_word  = (str) => {
//   let arr = str.split(' ');
//   let  result = arr[1].length;
//   for(let i=0;i<arr.length;i++){
//     if(i.length > result){
//       result = arr[1];
//     }
//     return arr.filter(x => x.length == result);
//   }
//   // return arr;
// }
// console.log(longest_word("Web Development Tutorial"));


// let longest_word = (String) => {
//   let Arr = String.split(" ");
//   let largerLength = Arr[0].length;
//   for (let i of Arr) {
//       if (i.length > largerLength) {
//           largerLength = i.length;
//       }
//   }
//   return Arr.filter(x => x.length == largerLength);
// }
// console.log(longest_word("Web Development Tutorial"));