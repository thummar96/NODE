/*


        String.prototype.padStart()
            The padStart() method pads the current string with another string (multiple times, if needed) until the resulting 
            string reaches the given length. The padding is applied from the start of the current string.

        Syntax  :=
                padStart(targetLength)
                padStart(targetLength, padString)

        Example :=
                let fullNumber = '123456789';
                let last4Digits = fullNumber.slice(-4);
                let maskedNumber = last4Digits.padStart(fullNumber.length, '*');
                console.log(maskedNumber);                                                  //          *****6789



*/