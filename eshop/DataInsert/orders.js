const bcrypt = require("bcryptjs");

const ordersData = {
    Order :[
        {
            id:"O0001",
            oderItems:["K0001"],
            shippingAddress1:"SkillQode",
            shippingAddress2:"MicraSolution",
            city:"Surat",
            zip:"395010",
            country:"India",
            phone:"9499556267",
            status:"Packed",
            totalPrice:100000,
            user:"63c90cb6fc6ea287a82f9d8b",
            dateOrdered:"20230119"
        }
    ]
}

module.exports=ordersData;