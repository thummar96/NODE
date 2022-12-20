let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["Mlik", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };
 let order = (fruit_name, call_production) =>{
    setTimeout(function(){
      console.log(`${stocks.Fruits[fruit_name]} was selected`)
     call_production();
    },2000)
  };
 
  let production = ()=>{
//   setTimeout(()=>{
//   console.log("Now order");
  setTimeout(()=>{
    console.log("production has started");
    setTimeout(()=>{
        console.log("The fruit has been chopped");
        setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
            setTimeout(()=>{
                console.log("start the machine");
                setTimeout(()=>{
                    console.log(`Ice cream placed on ${stocks.holder[1]}`);
                    setTimeout(()=>{
                        console.log(`${stocks.toppings[1]} as toppings`);
                        setTimeout(()=>{
                            console.log("serve Ice cream");
                          },1000)
                      },1000)
                  },1000)
              },1000)
          },1000)
      },1000)
  },1000)
// },1000)
};

order(0, production);


 /*  output */
 
 
 /*   strawberry was selected
      production has started
      The fruit has been chopped
      Mlik and ice Added
      start the machine
      Ice cream placed on cup
      peanuts as toppings
      serve Ice cream               */






// let stocks = {
//   pizza : ["pizza Margherita","Tandoori paneer pizza","chocolate pizza"],
//   toppings : ["baby corn","Garlic","Onion"],
//   cheesier : ["Mozzarella cheese","paresan cheese","Processed cheese"],
//   Drink : ["Pepsi","Coca Cola","Limca"],
// };

// let order = (pizza_name, call_production) =>{
//       setTimeout(function(){
//         console.log(`${stocks.pizza[pizza_name]} was selected`)
//        call_production();
//       },2000)
//     };

//     let production = () =>{

//       setTimeout(()=>{
//         console.log("production has started")
//         setTimeout(()=>{
//           console.log("Pizza selected")
//           setTimeout(()=>{
//             console.log(`${stocks.toppings[0]} as toppings`)
//             setTimeout(()=>{
//               console.log(`${stocks.cheesier[1]} as select`)
//               setTimeout(()=>{
//                 console.log(`${stocks.Drink[0]} as Choice`)
//                 setTimeout(()=>{
//                   console.log(" Pizza and Drink The serve ")
//                   setTimeout(()=>{
//                     console.log(" Thank you Welcome Again ")
//                   },1000)
//                 },1000)
//               },1000)
//             },1000)
//           },1000)
//         },1000)
//       },0000)
//     };

// order(0, production);
