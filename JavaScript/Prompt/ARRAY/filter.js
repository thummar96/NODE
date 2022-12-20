/*

    <--> Array.prototype.filter()
                The filter() method creates a shallow copy of a portion of a given array, filtered down to just 
                the elements from the given array that pass the test implemented by the provided function.

                Syntax :=
                        // Arrow function
                        filter((element) => {  …  })
                        filter((element, index) => {  …/ })
                        filter((element, index, array) => {  …  })

                        // Callback function
                        filter(callbackFn)
                        filter(callbackFn, thisArg)

                        // Inline callback function
                        filter(function (element) {  …  })
                        filter(function (element, index) {  …  })
                        filter(function (element, index, array) {  …  })
                        filter(function (element, index, array) {  …  }, thisArg)

                Example :=
                        console.log([1, 2, 3, 4, 5].filter((element) => {
                              return element >= 3;
                              })
                              ); //[ 3, 4, 5 ]


                        const numbers = [1, 2, 3, 4];
                        const evens = numbers.filter(item => item % 2 === 0);
                        console.log(evens);                                             // [ 2, 4 ]

                        
                        
                        const students = [
                        { name: 'Quincy', grade: 96 },
                            { name: 'Jason', grade: 84 },
                            { name: 'Alexis', grade: 100 },
                            { name: 'Sam', grade: 65 },
                            { name: 'Katie', grade: 90 }
                          ];
                          
                          const studentGrades = students.filter(student => student.grade >= 90);
                          console.log( studentGrades);                                                  // [
                                                                                                        //         { name: 'Quincy', grade: 96 },
                                                                                                        //         { name: 'Alexis', grade: 100 },
                                                                                                        //         { name: 'Katie', grade: 90 }
                                                                                                        // ]

*/



        
        
        



