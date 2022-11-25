/*   6. Write a JS function that input a number and return square & qube of number in aray.         */

//  Named function


function SquareQube(array)
{
    let Squareresult=[];
    let Quberesult=[];
    let result=[];
        
        for(let i=0;i<array.length;i++)
        {
               Squareresult.push(array[i]*array[i]);
               Quberesult.push(array[i]*array[i]*array[i]);
            }
            return result=[Squareresult,Quberesult];
    }
    console.log(" Number of Square And Qube : ",SquareQube([1,2,3,4,5]));



// function SquareQube(array) {
//     let squareresult = [];
//     let quberesult = [];
//     let finalarray = [];
//     for (let i = 0; i < array.lenght; i++) {
//         squareresult.push(array[i] * array[i]);
//         quberesult.push(array[i] * array[i] * array[i]);
//     }
//     // Resultarray = [Squarearray, Qubearray];
//     return finalarray=[squareresult, quberesult];

// }

// // let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(SquareQube([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));     // vrushabh



// function SquareQube(array){
//     let squareresult=[];
//     let quberesult=[];
//     let finalarray=[];
//     for(let i=0;i<array.length;i++)
//     {
//         squareresult.push(array[i]*array[i]);
//         quberesult.push(array[i]*array[i]*array[i]);
//     }
//     return finalarray=[squareresult,quberesult];

// }
// console.log("Number of Square And Cube : ",SquareQube([1,2,3,4,5]));



//  Anonymous funtion


// let square=(array)=>{
//     let result=[];
//     for(let i=0;i<array.length;i++)
//     {
//        result.push(array[i]*array[i]);
//     }
//     return result;
// }
// let cube=(array)=>{
//     let result=[];
//     for(let i=0;i<array.length;i++)
//     {
//        result.push(array[i]*array[i]*array[i]);
//     }
//     return result;
// }
// console.log("Number of Square : ",square([6,7,8,9,10]));
// console.log("Number of Cube : ",cube([6,7,8,9,10]));





