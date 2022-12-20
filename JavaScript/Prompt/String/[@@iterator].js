/*

    String.prototype[@@iterator]()
            The @@iterator method of a string implements the iterable protocol and allows strings to be consumed by most syntaxes 
            expecting iterables, such as the spread syntax and for...of loops. It returns an iterator that yields the Unicode code 
            points of the string value as individual strings.

        Syntax  :=
                string[Symbol.iterator]()

        Example :=
                let str = "The";
                let iterator = str[Symbol.iterator]();
                let theChar = iterator.next();
                while (!theChar.done && theChar.value !== ' ') {
                console.log(theChar.value);                                 //      T
                theChar = iterator.next();                                  //      h
                }                                                           //      e


*/