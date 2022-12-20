/*


        String.prototype.lastIndexOf()
            The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the 
            index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last 
            occurrence of the specified substring at an index less than or equal to the specified number.

        Syntax  :=
                lastIndexOf(searchString)
                lastIndexOf(searchString, position)

        Example :=
                let paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
                let searchTerm = 'dog';
                console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
                                                                                    //     The index of the first "dog" from the end is 52


*/