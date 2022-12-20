/*


        String.prototype.replace()
            The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The 
            pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If 
            pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

        Syntax  :=
                replace(pattern, replacement)

        Example :=       
                let p = 'The quick brown fox jumps over the lazy dog. ';
                console.log(p.replace('dog', 'monkey'));                    //      The quick brown fox jumps over the lazy monkey. 
                
                let regex = /Dog/i;
                console.log(p.replace(regex, 'ferret'));                    //      The quick brown fox jumps over the lazy ferret. 


*/