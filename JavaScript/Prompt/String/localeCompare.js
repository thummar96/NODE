/*


        String.prototype.localeCompare()
            The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the 
            given string in sort order. In implementations with Intl.Collator API support, this method simply calls Intl.Collator.                    
        
        Syntax  :=
                localeCompare(compareString)
                localeCompare(compareString, locales)
                localeCompare(compareString, locales, options)

        Example :=
                let a = 'reverse'; // with accents, lowercase
                let b = 'RESERVE'; // no accents, uppercase
                console.log(a.localeCompare(b));                        //      1



*/