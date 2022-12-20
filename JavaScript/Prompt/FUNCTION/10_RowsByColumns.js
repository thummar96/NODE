/*

10. Write a JS function which returns the n rows by n columns identity matrix.

*/


/***  Named Function ***/


function matrix (n) {
        let result = [];
        
        for(i=0;i<n;i++){
            let Arr = [];
            for(j=0;j<n;j++){
                if(i==j){
                    Arr.push(1);
                }
                else{
                    Arr.push(0);
                }
            }
                result.push(Arr);
        }
            return result;
    }
    console.log(matrix(3));

    

/*** Anonymous Function ***/


// let matrix = (n) => {
//     let result = [];
    
//     for(i=0;i<n;i++){
//         let Arr = [];
//         for(j=0;j<n;j++){
//             if(i==j){
//                 Arr.push(1);
//             }
//             else{
//                 Arr.push(0);
//             }
//         }
//             result.push(Arr);
//     }
//         return result;
// }
// console.log(matrix(3));



