let sum=(Number) => {
    while(Number>9){
        console.log(Number);
        let sum1=0;
        while(Number!=0){
            sum1=sum1+Number%10;
            Number=parseInt(Number/10);
        }
        Number=sum1;
    }
    // console.log()
    return Number
}

let total = (Number,work) => {
    return new Promise((resolve,reject)=>{
        if(Number>0){
            resolve(console.log(work(Number)));
        }
        else{
            reject(console.log(Number));
        }
    })
}
let Number=1234567897;
total(Number,sum);




/* . output */


/* 1234567897
   52
   7        */