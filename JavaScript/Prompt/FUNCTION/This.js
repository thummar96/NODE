/* this */

let student = {
    name : "raj",
    age : 17,
    course : "Node js",

    getstudentName : function(){
        // console.log(this);
        return this;
    }
}
console.log(typeof this);                // object
console.log(typeof student);             // object
// console.log(student.getstudentName())


/*   call   */

// let student1 = {
//         name : "raj",
//         age : 17,
//         course : "Node js",
//     }

//     let student2 = {
//         name : "ram",
//         age : 18,
//         course : "React",
//     }
// let getstudentName = function(){
//     console.log(this.name)
// }
//  getstudentName.call(student1)          // raj
//  getstudentName.call(student2)          // ram
// student1.getstudentName.call(student2)
// student1.getstudentName()


/*   Apply  */


// let student1 = {
//     name : "raj",
//     age : 17,
//     course : "Node js",
// }

// let student2 = {
//     name : "ram",
//     age : 18,
//     course : "React",
// }
// let getstudentName = function(){
//     console.log(this.name+" - " +"city" +" - " + "state" + " - "+  "country");
// }
// // getstudentName.apply(student1,["Surat","Gujrat","India"]);
// getstudentName.call(student1,("surat","Gujrat","India"))


/*   bind   */


// let student1 = {
//         name : "raj",
//         age : 17,
//         course : "Node js",
//     }
    
//     let student2 = {
//         name : "ram",
//         age : 18,
//         course : "React",
//     }
// let getstudentName=function(){
//     console.log(this.name);
// }
// let useAfter = getstudentName.bind(student1);               // raj

// useAfter();