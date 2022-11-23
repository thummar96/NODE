// *** 1. Named Function *** //

// --> The function with the partiular name called as named function..

// (1)  Function Defination
//     (2)  Function Calling

// Syntax: -

//     function Function_name(arg1, arg2, arg3) {
//         Business logic
//     } // Function defination 

// Function_name(param 1, param 2, parm 3); // Function calling


// Example ::-

// ( 1 )

/* function Fun_One() {
    return "Hello ";
}
console.log(Fun_One());  // Hello */

// ( 2 )

/* function fun_one(arg1,arg2,arg3)
{
    console.log(arg1,arg2,arg3);
}
fun_one("AngularJs","nodeJs","MongDB");
                                        // AngularJs nodeJs MongDB
fun_one("ReactJs","NodeJs");
                                // ReactJs NodeJs undefined
fun_one();
            // undefined undefined undefined
fun_one(undefined,"NodeJs");
                            // undefined NodeJs undefined
fun_one(null,null,null);
                        // null null null
fun_one(null," ",null);
                        // null   null
fun_one(null,{},[]);
                    // null {} []   */

// ( 3 )

/* function Fun_One() {
    return "Hello  Kinjal";
}
function Fun_Two() {
    return Fun_One();
}
function Fun_Three() {
    return Fun_Two();
}
console.log(Fun_Three()); // Hello  Kinjal */

// ( 4 )

/* function Fun_One() {
    return "Hello....";
}
function Fun_Two() {
    return Fun_One;
}
function Fun_Three() {
    return Fun_Two;
}
console.log(Fun_Three()()());  // Hello....  */


// ( 5 )

/* function Fun_One(arg1, arg2, arg3) {
    console.log(arg1(), arg2(), arg3());
    //console.log(arg1, arg2, arg3); // [Function: Fun_Two] [Function: Fun_Three] [Function: Fun_Four]
}
function Fun_Two() {
    return "Hello_2...";
}
function Fun_Three() {
    return "Hello_3...";
}
function Fun_Four() {
    return "Hello_4...";
}
Fun_One(Fun_Two, Fun_Three, Fun_Four);  // Hello_2... Hello_3... Hello_4... */

