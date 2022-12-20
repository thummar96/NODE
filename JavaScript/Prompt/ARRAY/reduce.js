/*

    <--> Array.prototype.reduce()
                The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
                in order, passing in the return value from the calculation on the preceding element. 
                The final result of running the reducer across all elements of the array is a single value.

                Syntax :=
                        reduce((accumulator, currentValue) => { / … / })
                        reduce((accumulator, currentValue, currentIndex) => { / … / })
                        reduce((accumulator, currentValue, currentIndex, array) => { / … / })

                Example :=
                        console.log(
                                [1, 2, 3, 4, 5].map((element, index) => {
                                    return element * 100;
                                }).filter((element, index) => {
                                    return element >= 300;
                                })
                            );                                      // [ 300, 400, 500 ]
                            
                            console.log(
                                [1, 2, 3, 4, 5].reduce((firstElement, nextElement) => {
                                    console.log(firstElement +" - " + nextElement)
                                    return firstElement + nextElement;
                                },10)
                            );                                      // 10 - 1
                                                                    // 11 - 2
                                                                    // 13 - 3
                                                                    // 16 - 4
                                                                    // 20 - 5
                                                                    // 25



*/  
