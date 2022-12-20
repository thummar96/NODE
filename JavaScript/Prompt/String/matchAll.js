/*


        String.prototype.matchAll()
            The matchAll() method returns an iterator of all results matching a string against a regular expression, 
            including capturing groups.

        Syntax  :=
                matchAll(regexp)

        Example :=
                    let regexp = /t(e)(st(\d?))/g;
                    let str = 'test1test2';
                    let  array = [...str.matchAll(regexp)];
                    console.log(array[0]);              // Array ["test1", "e", "st1", "1"]                                    
                    console.log(array[1]);             //  Array ["test2", "e", "st2", "2"]


*/