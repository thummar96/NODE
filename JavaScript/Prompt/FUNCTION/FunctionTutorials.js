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
/********************************/

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

/** 23/11/2022 **/

// *** Anonymous Function *** //
/******************************/

/*  -> The Function without name called as anonymous function.
    -> Anonymous functions also called as "Arrow" functions, "Lamda" functions and "Callback" functions.
    -> we will respresent arrow functions with " => ".
    -> " => "  introduced in ES6.


     Synntax :: -
        (1) Function Defination
        (2) Function Calling

( 1 )  Var / let /const variable_name = (arg1, arge2, ... , arg N) => {
             Business Logic;
            } // Function Ddefination
        variable_name(param1, param2, ..., param N); //  Function Calling


( 2 )  console.log (()=>{}); */     


//  ( 1 )

/* let Fun_One = () => {
    return "Hello";
}
console.log(Fun_One()); */
                        // Hello


// ( 2 ) Single statement

/* let Fun_One = () => "Hello";
console.log(Fun_One()); */
                        // Hello

// ( 3 )

 /*let Fun_One = () => {
    return () => {
        return () => {
            return () => {
                return "Hello";
            }
        }
    }
}
console.log(Fun_One()()()());  // Chaining Function.  */
                            // Hello

// ( 4 )

/* let Fun_One = (str) => `Hello ${str}`;
let str = " Kinjal ";
console.log(Fun_One(str)); */
                                // Hello  Kinjal

// ( 5 )

/* let Fun_One = (arg1) => {
    console.log(arg1());
}
Fun_One(() => "Hello");*/ 
                        // Hello

// ( 6 )

/* let Fun_Two = () => "Hello_Fun_2";
let Fun_One = (arg1, arg2, arg3) => {
    console.log(arg1(), arg2(), arg3());
}
Fun_One(() => { return "Hello_1" }, Fun_Two, () => "Hello_3");
                                                                // Hello_1 Hello_Fun_2 Hello_3
Fun_One(() => "Hello_1", () => "Hello_2", () => "Hello_3"); 
                                                            // Hello_1 Hello_2 Hello_3   */ 

                                                            

/** 24/11/2022 **/


/***** copy_array *****/
/**************************/

// let arr1=[10,20,30];
// let arr2=[100,200,300];
// let copy_array;

// copy_array=[...arr1,arr2];    // spread opertor
                            // // [ 10, 20, 30, [ 100, 200, 300 ] ]
// copy_array=[...arr1,...arr2];
                                //  10, 20, 30, 100, 200, 300 ]
// copy_array=arr1;
                // [ 10, 20, 30 ]
// copy_array=arr1.slice(0);
                            // [ 10, 20, 30 ]
// arr1.push(40);
                // [ 10, 20, 30, 40 ]
// copy_array.push(50);

// console.log(arr1);
                    
// console.log(typeof copy_array);
// console.log(arr1==copy_array);


// /**** Default parameters in Functions   *****/
/***************************************************/

// - while defining the function we will initilize arguments with default values
// - this concept introduced in "ES6"

// function fun_one(arg1="Hello_1",arg2="Hello_2",arg3="hello_3")
// {
//     console.log(arg1,arg2,arg3);
// }

// fun_one();
            // Hello_1 Hello_2 hello_3
// fun_one("H_1","H_2","H_3");
                            // H_1 H_2 H_3
// fun_one("welcome_1","welcome_2","welcome_3");
                                            // welcome_1 welcome_2 welcome_3
// fun_one(undefined,undefined,undefined);
                                        // Hello_1 Hello_2 hello_3
// fun_one(null,null,null);
                        // null null null
// fun_one(undefined,undefined,"H_3");
                                    // Hello_1 Hello_2 H_3


// function fun_one(arg1,arg2="hello_2")
// {
//     console.log(arg1,arg2);
// }

// fun_one();
            // undefined hello_2
// fun_one("hello_1");
                // hello_1 hello_2
// fun_one(undefined,undefined);
                            // undefined hello_2
// fun_one(null,null);
                    // null null

                    

// /***** Rest parameters in Function   *****/
/***********************************************/


/*** Defination  */
/********************/

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.


/** Syntax **/
/****************/

// function f(a, b, ...theArgs) {
//     // …
//   }


/** Description **/
/********************/

// function definition's last parameter can be prefixed with ... (three U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters to be placed within a standard JavaScript array. Only the last parameter in a function definition can be a rest parameter.

/***  Differences Between  Parameters and Arguments object ***/
/***************************************************************/

// There are three main differences between rest parameters and the arguments object:

// The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort(), map(), forEach() or pop() can be applied on it directly.

// The arguments object has additional functionality specific to itself (like the callee property).

// The ...restParam bundles all the extra parameters into a single array, therefore it does not contain any named argument defined before the ...restParam. Whereas the arguments object contains all of the parameters — including the parameters in the ...restParam array — bundled into one array-like object.

/************************************************************************************************************************************************************************************************************************************************************************************************************************/

// - by using rest parameters, we can hold / store more than one value " ES6 "
// - we will represent rest parameters with " ... " operator
// - "..." operator called as spread operator
// - we can have only "one " spread operator per function
// - position of spread operator shoud be last in occurances

// function fun_one(arg,...arg1)
// {
//     console.log(arg);
//     console.log(arg1);
// }

// fun_one();
            // undefined
// fun_one("Hello_1");
                    // Hello_1
// fun_one("Hello_1","Hello_2");
                            // Hello_1
                            // [ 'Hello_2' ]
// fun_one("Hello_1","Hello_2","Hello_3");
                                        //  Hello_1
                                            // [ 'Hello_2', 'Hello_3' ]
// fun_one(undefined,undefined);
                            // undefined
                            // [ undefined ]
// fun_one(undefined,null);
                        // undefined
                        // [ null ]