const bcrypt = require("bcryptjs");

const usersData = {
    Users : [
        {
            id:"N00001" ,
            name:"Nensi Kumbhani" ,
            email:"nensikumbhani2212@gmail.com" ,
            passwordHash:"nensi$2212" ,
            street:"BalKrushan" ,
            apartment:"BalKrushan" ,
            city:"Surat" ,
            zip:"395010" ,
            country:"India" ,
            phone:9724025877 ,
            isAdmin: true
        }
    ]
};

module.exports=usersData;