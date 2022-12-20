let sum=(Number) => {
    let sum1=0;
    console.log(Number);
    while(Number!=0){
        sum1=sum1+Number%10;
        Number=parseInt(Number/10);
    }
    return sum1;
}
let total=(Number,callback) => {
    let n=callback(Number);
    while(n>1){
        return sum(n);
    }
    return n;
}
let number=1234567897;
console.log(total(number, sum));

/*   output   */

 /*       1234567897
          52
          7             */
