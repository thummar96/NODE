// 21/11/2022

// function Test(n)
// {
//     console.log( ` inside function........${n} `);
//     return [];
// }

// let n=Test(10);
// console.log(typeof n);
                    //  inside function.......
                    //  object

// function Test(n)
// {
//     console.log( ` inside function........${n} `);
// }
// Test(10);
            //  inside function........10


// 22/11/2022

/*** Function ***/

// Functions are one of the fundamental building blocks in JavaScript.
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value,but for a procedure to qualify as a function, 
// it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, 
// you must define it somewhere in the scope from which you wish to call it.


// syntax :

//    function Function_Name(Variable){
//        statemant ;
//    } // function defining

//    function_name (Parameter);

// business logical called as functions are used to reuse the business logic we have following type of functions up to "ES113"

// type of function 

// 1. Named functions
// 2.Anonymous functions
// 3.Rest perameters in functions
// 4.Default perameters in functions
// 5.Optional perameters in functions
// 6.Genrators
// 7.Constructor functions
// 8.IIFE [Immidiate Invokable functional Expressions]

// *** 1. Named Function *** //

// --> The function with the partiular name called as named function..

// (1)  Function Defination
//     (2)  Function Calling

// Syntax: -

//     function Function_name(arg1, arg2, arg3) {
//         Business logic
//     } // Function defination 

// Function_name(param 1, param 2, parm 3); // Function calling



// function fun_one(arg1,arg2,arg3)
// {
//     console.log(arg1,arg2,arg3);
// }
// fun_one("AngularJs","nodeJs","MongDB");
                                        // AngularJs nodeJs MongDB
// fun_one("ReactJs","NodeJs");
                                // ReactJs NodeJs undefined
// fun_one();
            // undefined undefined undefined
// fun_one(undefined,"NodeJs");
                            // undefined NodeJs undefined
// fun_one(null,null,null);
                        // null null null
// fun_one(null," ",null);
                        // null   null
// fun_one(null,{},[]);
                    // null {} []


// Example ::-

//    [1]

// function fun_Zero()
// {
//     console.log(" Inside fun_Zero ");
//     return "Hello"
// }                    
// function fun_one()
// {
//     console.log(" Inside fun_one ");
//     return fun_Zero();
// }
// function fun_two()
// {
//     console.log(" Inside fun_two ");
//     return fun_one();
// }
// console.log(fun_two());
/*                      Inside fun_two 
                        Inside fun_one 
                        Inside fun_Zero 
                        Hello               */

//     [2]

// function fun_one()
// {
//     return "Hello";
// }                  
// function fun_two()
// {
//     return fun_one;
// }     
// console.log(fun_two());
//                         // [Function: fun_one]
// console.log(fun_two()());
//                         // Hello


//     [3]

// function fun_one(arg1,arg2,arg3)
// {
//     console.log(arg1(),arg2(),arg3());
//     // console.log(arg1,arg2,arg3);  
//                                 // [Function: fun_one] [Function: fun_three] [Function: fun_four]  
// }
// function fun_two()
// {
//     return "Hello_1";
// }
// function fun_three()
// {
//     return "Hello_2";    
// }
// function fun_four() 
// {
//     return "Hello_3";    
// }
// fun_one(fun_two,fun_three,fun_four);
                                    //  Hello_1 Hello_2 Hello_3