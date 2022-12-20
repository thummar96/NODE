/*


        String.prototype.indexOf()
            The indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns 
            the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the 
            first occurrence of the specified substring at an index greater than or equal to the specified number.

        Syntax  :=
                indexOf(searchString)
                indexOf(searchString, position)

        Example :=
                let paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
                let searchTerm = 'dog';
                let indexOfFirst = paragraph.indexOf(searchTerm);
                console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);        
                                                                                //      The index of the first "dog" from the beginning is 40
                console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
                                                                                //      The index of the 2nd "dog" is 52


*/