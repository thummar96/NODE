/*


        String.raw()
            The static String.raw() method is a tag function of template literals. This is similar to the r prefix in Python, 
            or the @ prefix in C# for string literals. It's used to get the raw string form of template literals — that is, 
            substitutions (e.g. ${foo}) are processed, but escape sequences (e.g. \n) are not.

        Syntax  :=
                String.raw(strings, ...substitutions)

        Example :=
                    let filePath = String.raw`C:\Development\profile\aboutme.html`;
                console.log(`The file was uploaded from: ${filePath}`);
                                                // The file was uploaded from: C:\Development\profile\aboutme.html



*/