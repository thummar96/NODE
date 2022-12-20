/*

16. Write a JS function to extract unique characters from a string. 
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"

*/


/***  Named Function ***/


// function uniqueChar(str)
// {
//  let str1=str;
//  let uniql="";
//  for (var i=0;i < str1.length;i++){
//     if(uniql.indexOf(str.charAt(i))==-1){
//             uniql += str1[i];  
//     }
//   }
//   return uniql;  
// }  
// console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));


/*** Anonymous Function ***/


let  uniqueChar = (str) =>{
 let str1=str;
 let uniql="";
 for (var i=0;i < str1.length;i++){
    if(uniql.indexOf(str.charAt(i))==-1){
            uniql += str1[i];  
    }
  }
  return uniql;  
}  
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));