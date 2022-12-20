/*


        String.prototype.search()
            The search() method executes a search for a match between a regular expression and this String object.
        
        Syntax :=
                search(regexp)

        Example :=
                let  paragraph = 'The quick brown fox jumps over the lazy dog.';
                let regex = /[^\w\s]/g;
                console.log(paragraph.search(regex));                   //   43
                console.log(paragraph[paragraph.search(regex)]);        //   .



*/