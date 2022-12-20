function Add(number,callback){
    return callback(number+10,false)
}

function Sub(number,callback){
    return callback(number-5,false)
}

function Mul(number,callback){
    return callback(number*2,false)
}

function Div(number,callback){
    return callback(number/3,false)
}

Add(10,(addition,error) =>{
    if(!error){console.log("Addition =",addition);
        Sub(addition,(subtraction,error) => {
            if(!error){console.log("subtraction =",subtraction);
                Mul(subtraction,(multipacation,error) => {
                    if(!error){console.log("multipacation =",multipacation);
                        Div(multipacation,(division,error) => {
                            if(!error){
                                console.log("Division =",division);
                            }
                        })
                    }
                })
            }
        })
    }
})

/*

Addition = 20
subtraction = 15
multipacation = 30
Division = 10


*/


// let Add=(number,callback) =>{
//     return callback(number+10,false)
// }

// let Sub=(number,callback) =>{
//     return callback(number-5,false)
// }

// let Mul=(number,callback) =>{
//     return callback(number*2,false)
// }

// let Div=(number,callback) =>{
//     return callback(number/3,false)
// }

// Add(10,(additoin,error) =>{
//     if(!error){console.log("Addition =",additoin);
//         Sub(additoin,(subtraction,error) => {
//             if(!error){console.log("subtraction =",subtraction);
//                 Mul(subtraction,(multipacation,error) => {
//                     if(!error){console.log("multipacation =",multipacation);
//                         Div(multipacation,(division,error) => {
//                             if(!error){
//                                 console.log("Division =",division);
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })




// function Add(number,callback){
//     return callback(number+10,true)
// }

// function Sub(number,callback){
//     return callback(number-5,true)
// }

// function Mul(number,callback){
//     return callback(number*2,true)
// }

// function Div(number,callback){
//     return callback(number/3,true)
// }

// Add(10,(additoin,error) =>{
//     if(!error){console.log("Addition =",additoin);
//         Sub(additoin,(subtraction,error) => {
//             if(!error){console.log("subtraction =",subtraction);
//                 Mul(subtraction,(multipacation,error) => {
//                     if(!error){console.log("multipacation =",multipacation);
//                         Div(multipacation,(division,error) => {
//                             if(!error){
//                                 console.log("Division =",division);
//                             }
//                             else{
//                                 console.log("NO One ");
//                             }
//                         })
//                     }
//                     else{
//                         console.log("NO Two ");
//                     }
//                 })
//             }
//             else{
//                 console.log("NO Three ");
//             }
//         })
//     }
//     else{
//         console.log("NO Four ");
//     }
// })







// function Add(number,callback){
//     return callback(number+10,false)
// }

// function Sub(number,callback){
//     return callback(number-5,false)
// }

// function Mul(number,callback){
//     return callback(number*2,false)
// }

// function Div(number,callback){
//     return callback(number/3,false)
// }

// Add(10,(address,error) =>{
//     console.log(typeof address);
//     if(!error){console.log("Addition =",address);
//         Sub(address,(subres,error) => {
//             if(!error){console.log("subtraction =",subres);
//                 Mul(subres,(mulres,error) => {
//                     if(!error){console.log("multipacation =",mulres);
//                         Div(mulres,(divres,error) => {
//                             if(!error){
//                                 console.log("Division =",divres);
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })







